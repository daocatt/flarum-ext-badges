<?php

namespace Gtdxyz\UserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\UserBadges\Api\Serializer\BadgeSerializer;
use Gtdxyz\UserBadges\Badge\Badge;
use Illuminate\Support\Arr;

class ShowBadgeController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BadgeSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ["category"];

    /**
     * {@inheritdoc}
     */
    public $optionalInclude = ["users"];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        return Badge::findOrFail(Arr::get($request->getQueryParams(), 'id'));
    }
}
