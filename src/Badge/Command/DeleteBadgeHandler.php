<?php

namespace Gtdxyz\Badges\Badge\Command;

use Flarum\Foundation\ValidationException;
use Gtdxyz\Badges\Models\Badge;

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
