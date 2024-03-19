<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\Badges\BadgeCategory\Command\UpdateBadgeCategory;
use Gtdxyz\Badges\Api\Serializer\BadgeCategorySerializer;

class UpdateBadgeCategoryController extends AbstractShowController
{
    public $serializer = BadgeCategorySerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document) 
    {
        return $this->bus->dispatch(
            new UpdateBadgeCategory(
                $request->getAttribute('actor'),
                Arr::get($request->getQueryParams(), 'id'),
                Arr::get($request->getParsedBody(), 'data', null)
            )
        );
    }
}
