<?php

namespace Gtdxyz\Badges;

use Flarum\Extend;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\User\User;
// use Flarum\Api\Controller as FlarumController;
// use Flarum\Api\Serializer\BasicUserSerializer;
// use Flarum\Api\Serializer\CurrentUserSerializer;

use Flarum\User\Event\Saving as UserSaving;
use Gtdxyz\Badges\Listeners\UpdateDisplayBadges;
use Gtdxyz\Badges\Notification\BadgeReceivedBlueprint;

$extend = [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less')
        ->route('/badges', 'badges.index', Controllers\BadgeOverviewController::class)
        ->route('/badges/{id}', 'badges.detail', Controllers\BadgeOverviewController::class),
    
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\Event())
        ->listen(UserSaving::class, UpdateDisplayBadges::class),

    (new Extend\Routes('api'))
        // Badges
        ->get('/badges', 'badges.index', Api\Controller\ListBadgesController::class)
        ->post('/badges', 'badges.create', Api\Controller\CreateBadgeController::class)
        ->post('/badges/order', 'badges.order', Api\Controller\OrderBadgesController::class)
        ->get('/badges/{id}', 'badges.show', Api\Controller\ShowBadgeController::class)
        ->patch('/badges/{id}', 'badges.update', Api\Controller\UpdateBadgeController::class)
        ->delete('/badges/{id}', 'badges.delete', Api\Controller\DeleteBadgeController::class)

        // Badge categories
        ->get('/badge-categories', 'badge.categories.overview', Api\Controller\ListBadgeCategoriesController::class)
        ->post('/badge-categories', 'badge.categories.create', Api\Controller\CreateBadgeCategoryController::class)
        ->post('/badge-categories/order', 'badge.categories.order', Api\Controller\OrderBadgeCategoriesController::class)
        ->patch('/badge-categories/{id}', 'badge.categories.update', Api\Controller\UpdateBadgeCategoryController::class)
        ->delete('/badge-categories/{id}', 'badge.categories.delete', Api\Controller\DeleteBadgeCategoryController::class)

        // User badges
        ->get('/user-badges', 'badge.users.overview', Api\Controller\ListUserBadgesController::class)
        ->post('/user-badges', 'badge.users.create', Api\Controller\CreateUserBadgeController::class)
        ->patch('/user-badges/{id}', 'badge.users.update', Api\Controller\UpdateUserBadgeController::class)
        ->delete('/user-badges/{id}', 'badge.users.delete', Api\Controller\DeleteUserBadgeController::class),

    // Extension permissions
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('canGiveBadge', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.giveBadge");
        })
        ->attribute('canViewDetailedBadgeUsers', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.canViewDetailedUsers");
        })
        ->attribute('editOwnUserCardBadges', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.editOwnUserCardBadges");
        })
        ->attribute('editUserCardBadges', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.editUserCardBadges");
        }),

    // Badges relation with User
    (new Extend\Model(User::class))
        ->relationship('userBadges', function ($user) {
            return $user->hasMany(Models\UserBadge::class, 'user_id');
        }),
    
    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(Attributes\BadgesAttributes::class),


    (new Extend\Filter(\Gtdxyz\Badges\UserBadge\Filter\UserBadgeFilterer::class))
        ->addFilter(\Gtdxyz\Badges\UserBadge\Filter\UserFilter::class)
        ->addFilter(\Gtdxyz\Badges\UserBadge\Filter\BadgeFilter::class),

    (new Extend\Notification())
        ->type(BadgeReceivedBlueprint::class, Api\Serializer\UserBadgeSerializer::class, ['alert']),

    (new Extend\Policy())
        ->modelPolicy(User::class, Access\UserPolicy::class),

    (new Extend\Settings())
        ->serializeToForum('showBadgesOnUserCard', 'gtdxyz-badges.show_badges_on_user_card', 'boolval')
        ->serializeToForum('numberOfBadgesOnUserCard', 'gtdxyz-badges.number_of_badges_on_user_card', 'intval')
        ->default('gtdxyz-badges.number_of_badges_on_user_card', 3),
];

return $extend;
