<?php

namespace Gtdxyz\Badges\Badge\Command;

use Flarum\User\User;

class UpdateBadge
{
    public $actor;

    public $id;

    public $data;

    public function __construct(User $actor, $id, $data)
    {
        $this->actor = $actor;
        $this->id = $id;
        $this->data = $data;
    }
}
