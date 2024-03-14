<?php

namespace Gtdxyz\UserBadges\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Gtdxyz\UserBadges\UserBadge\UserBadge;

class BadgeReceivedBlueprint implements BlueprintInterface
{
    public $badge;

    public function __construct(UserBadge $badge)
    {
        $this->badge = $badge;
    }

    public function getFromUser()
    {
        return null;
    }

    public function getSubject()
    {
        return $this->badge;
    }

    public function getData()
    {
        return null;
    }

    public static function getType()
    {
        return 'badgeReceived';
    }

    public static function getSubjectModel()
    {
        return UserBadge::class;
    }
}