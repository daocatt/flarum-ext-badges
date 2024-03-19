<?php

namespace Gtdxyz\Badges\BadgeCategory\Command;

use Flarum\User\User;

class CreateBadgeCategory
{
    public $actor;

    public $data;

    public function __construct(User $actor, $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
