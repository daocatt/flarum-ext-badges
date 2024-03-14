<?php

namespace Gtdxyz\UserBadges\Badge\Command;

use Flarum\Foundation\ValidationException;
use Gtdxyz\UserBadges\Badge\Badge;

class DeleteBadgeHandler
{
    /**
     * @param DeleteBadge $command
     */
    public function handle(DeleteBadge $command)
    {
        $command->actor->assertAdmin();

        $badge = Badge::findOrFail($command->id);

        $badge->delete();
    }
}
