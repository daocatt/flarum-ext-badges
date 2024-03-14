<?php

namespace Gtdxyz\UserBadges\UserBadge\Command;

use Flarum\Foundation\ValidationException;
use Gtdxyz\UserBadges\UserBadge\UserBadge;

class DeleteUserBadgeHandler
{
    /**
     * @param DeleteUserBadge $command
     */
    public function handle(DeleteUserBadge $command)
    {
        // Make sure the person can remove a badge from a user 
        $command->actor->assertCan('badges.removeBadge');

        $badge = UserBadge::findOrFail($command->id);

        $badge->delete();
    }
}
