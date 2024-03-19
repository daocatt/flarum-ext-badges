<?php

namespace Gtdxyz\Badges\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Gtdxyz\Badges\Models\UserBadge;

class UpdateDisplayBadges
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Saving $event
     *
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    public function handle(Saving $event)
    {

        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        // Update user badges in card
        if (Arr::has($attributes, "userCardBadges") && is_array($attributes['userCardBadges'])) {
            $actor->assertCan('editUserCardBadges', $user);

            // First, validate the amount of selected badges
            if (count($attributes['userCardBadges']) > $this->settings->get('gtdxyz-badges.number_of_badges_on_user_card')) {
                throw new \Error("Too many badges selected");
            }

            // Set Badges to hidden
            $badge_ids = $attributes['userCardBadges'];
            UserBadge::where([
                "user_id" => $user->id,
                "in_user_card" => 1
            ])->whereNotIn('id',$badge_ids)->update(['in_user_card'=>0]);
            
            UserBadge::where([
                "user_id" => $user->id,
                "in_user_card" => 0
            ])->whereIn('id',$badge_ids)->update(['in_user_card'=>1]);

        }
    }
}
