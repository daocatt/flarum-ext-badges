<?php

namespace Gtdxyz\Badges\UserBadge\Filter;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;

class BadgeFilter implements FilterInterface
{
    public function getFilterKey(): string
    {
        return 'badge';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        $filterState->getQuery()->where('badge_user.badge_id', $filterValue);
    }
}
