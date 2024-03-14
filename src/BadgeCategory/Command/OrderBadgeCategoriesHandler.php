<?php

namespace Gtdxyz\UserBadges\BadgeCategory\Command;

use Flarum\Foundation\ValidationException;
use Gtdxyz\UserBadges\BadgeCategory\BadgeCategory;

class OrderBadgeCategoriesHandler
{
    /**
     * @param DeleteBadge $command
     */
    public function handle(OrderBadgeCategories $command)
    {
        $command->actor->assertAdmin();
        
        foreach($command->order as $badgePosition => $categoryId) {
            BadgeCategory::where('id', $categoryId)->update([
                'order' => $badgePosition
            ]);
        }

        return BadgeCategory::all();
    }
}
