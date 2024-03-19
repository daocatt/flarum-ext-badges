<?php

namespace Gtdxyz\Badges\UserBadge\Command;

use Flarum\User\User;

class CreateUserBadge
{
    public $actor;

    public $data;

    public function __construct(User $actor, $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
