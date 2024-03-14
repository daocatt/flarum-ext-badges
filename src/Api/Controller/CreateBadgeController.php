<?php

namespace Gtdxyz\UserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\UserBadges\Badge\Command\CreateBadge;
use Gtdxyz\UserBadges\Api\Serializer\BadgeSerializer;

class CreateBadgeController extends AbstractCreateController
{
    public $serializer = BadgeSerializer::class;

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
            new CreateBadge(
                $request->getAttribute('actor'),
                Arr::get($request->getParsedBody(), 'data', null)
            )
        );
    }
}
