<?php

namespace Gtdxyz\UserBadges\AutoModerator\Action;

use Askvortsov\AutoModerator\Action\ActionDriverInterface;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Contracts\Support\MessageBag;
use Gtdxyz\UserBadges\UserBadge\UserBadge;
use Flarum\User\User;
use Flarum\Notification\NotificationSyncer;
use Gtdxyz\UserBadges\Notification\BadgeReceivedBlueprint;

class GiveBadge implements ActionDriverInterface
{
    /**
     * @var NotificationSyncer
     */
    protected $notifications;

    /**
     * @param NotificationSyncer $notifications
     */
    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    public function translationKey(): string
    {
        return 'gtdxyz-flarum-badges.admin.auto_moderator.action_drivers.give_badge';
    }

    public function availableSettings(): array {
        return [
            'badge_id' => 'gtdxyz-flarum-badges.admin.auto_moderator.action_drivers.badge_id'
        ];
    }

    public function validateSettings(array $settings, Factory $validator): MessageBag {
        return $validator->make($settings, [
            'badge_id' => 'required|integer',
        ])->errors();
    }

    public function extensionDependencies(): array
    {
        return [];
    }

    public function execute(User $user, array $settings = [], User $lastEditedBy ) {
        $badge = UserBadge::build($user->id, $settings['badge_id']);
        $badge->save();

        // Send notification
        $this->notifications->sync(
            new BadgeReceivedBlueprint($badge),
            [$user]
        );
    }
}
