<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\Badges\Api\Serializer\BadgeSerializer;
use Gtdxyz\Badges\Badge\Command\OrderBadges;

class OrderBadgesController extends AbstractListController
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
            new OrderBadges(
                $request->getAttribute('actor'),
                Arr::get($request->getParsedBody(), 'order', null)
            )
        );
    }
}
