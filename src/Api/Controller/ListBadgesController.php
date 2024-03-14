<?php

namespace Gtdxyz\UserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\UserBadges\Api\Serializer\BadgeSerializer;
use Gtdxyz\UserBadges\Badge\Badge;
use Illuminate\Support\Arr;

class ListBadgesController extends AbstractListController
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
        $actor = $request->getAttribute('actor');

        // Only show uncategorized badges
        if(Arr::get($request->getQueryParams(), "uncategorized")) {
            return Badge::whereNull('badge_category_id')->get();
        }

        return Badge::all();
    }
}
