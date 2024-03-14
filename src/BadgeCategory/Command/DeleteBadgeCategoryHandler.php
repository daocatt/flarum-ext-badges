<?php

namespace Gtdxyz\UserBadges\BadgeCategory\Command;

use Flarum\Foundation\ValidationException;
use Gtdxyz\UserBadges\BadgeCategory\BadgeCategory;

class DeleteBadgeCategoryHandler
{
    /**
     * @param DeleteBadgeCategory $command
     */
    public function handle(DeleteBadgeCategory $command)
    {
        $command->actor->assertAdmin();

        $badgeCategory = BadgeCategory::findOrFail($command->id);

        $badgeCategory->delete();
    }
}
