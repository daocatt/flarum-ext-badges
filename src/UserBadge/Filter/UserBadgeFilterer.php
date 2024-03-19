<?php

namespace Gtdxyz\Badges\UserBadge\Filter;

use Flarum\Filter\AbstractFilterer;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Gtdxyz\Badges\Models\UserBadgeRepository;

class UserBadgeFilterer extends AbstractFilterer
{
    /**
     * @var UserBadgeRepository
     */
    protected $userBadges;
    
    /**
     * @param UserBadgeRepository $userBadges
     * @param array $filters
     * @param array $filterMutators
     */
    public function __construct(UserBadgeRepository $userBadges, array $filters, array $filterMutators)
    {
        
        parent::__construct($filters, $filterMutators);

        $this->userBadges = $userBadges;
    }

    protected function getQuery(User $actor): Builder
    {
        return $this->userBadges->query()->select('badge_user.*');
    }
}
