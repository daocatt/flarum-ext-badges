<?php

namespace Gtdxyz\UserBadges\Badge\Command;

use Flarum\User\User;

class OrderBadges
{
    public $actor;

    public $order;

    public function __construct(User $actor, $order)
    {
        $this->actor = $actor;
        $this->order = $order;
    }
}
