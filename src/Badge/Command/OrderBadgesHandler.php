<?php

namespace Gtdxyz\Badges\Badge\Command;

use Flarum\Foundation\ValidationException;
use Gtdxyz\Badges\Models\Badge;

class OrderBadgesHandler
{
    /**
     * @param DeleteBadge $command
     */
    public function handle(OrderBadges $command)
    {
        $command->actor->assertAdmin();
        
        foreach($command->order as $category) {
            foreach($category['children'] as $badgePosition => $badgeId) {
                Badge::where('id', $badgeId)->update([
                    'order' => $badgePosition,
                    'badge_category_id' => $category['id']
                ]);
            }
        }

        return Badge::all();
    }
}
