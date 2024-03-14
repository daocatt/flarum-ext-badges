<?php

namespace Gtdxyz\UserBadges\UserBadge\Filter;

use Flarum\Filter\AbstractFilterer;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Gtdxyz\UserBadges\UserBadge\UserBadge;
use Gtdxyz\UserBadges\UserBadge\UserBadgeRepository;

class UserBadgeFilterer extends AbstractFilterer
{
    /**
     * @param array $filters
     * @param array $filterMutators
     */
    public function __construct(array $filters, array $filterMutators)
    {
        parent::__construct($filters, $filterMutators);
    }

    protected function getQuery(User $actor): Builder
    {
        return UserBadge::query();
    }
}
