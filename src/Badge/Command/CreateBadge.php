<?php

namespace Gtdxyz\Badges\Badge\Command;

use Flarum\User\User;

class CreateBadge
{
    public $actor;

    public $data;

    public function __construct(User $actor, $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
