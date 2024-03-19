<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\Badges\Api\Serializer\BadgeSerializer;
use Gtdxyz\Badges\Models\Badge;
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
