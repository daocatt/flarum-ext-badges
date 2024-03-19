<?php

namespace Gtdxyz\Badges\UserBadge\Filter;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Filter\ValidateFilterTrait;
use Flarum\User\UserRepository;

class UserFilter implements FilterInterface
{
    use ValidateFilterTrait;

    /**
     * @var \Flarum\User\UserRepository
     */
    protected $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function getFilterKey(): string
    {
        return 'user';
    }

    public function filter(FilterState $filterState, $filterValue, bool $negate)
    {
        $usernames = $this->asStringArray($filterValue);

        $ids = $this->users->query()->whereIn('username', $usernames)->pluck('id');

        $filterState->getQuery()->whereIn('badge_user.user_id', $ids, 'and', $negate);
    }
}
