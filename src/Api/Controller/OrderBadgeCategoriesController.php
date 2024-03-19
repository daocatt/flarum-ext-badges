<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\Badges\Api\Serializer\BadgeCategorySerializer;
use Gtdxyz\Badges\BadgeCategory\Command\OrderBadgeCategories;

class OrderBadgeCategoriesController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BadgeCategorySerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ["category"];

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
            new OrderBadgeCategories(
                $request->getAttribute('actor'),
                Arr::get($request->getParsedBody(), 'order', null)
            )
        );
    }
}
