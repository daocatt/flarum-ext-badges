<?php

namespace Gtdxyz\UserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\UserBadges\Api\Serializer\BadgeCategorySerializer;
use Gtdxyz\UserBadges\BadgeCategory\BadgeCategory;

class ListBadgeCategoriesController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BadgeCategorySerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ["badges"];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        return BadgeCategory::all();
    }
}
