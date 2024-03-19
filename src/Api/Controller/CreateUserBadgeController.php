<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\Badges\UserBadge\Command\CreateUserBadge;
use Gtdxyz\Badges\Api\Serializer\UserBadgeSerializer;

class CreateUserBadgeController extends AbstractCreateController
{
    public $serializer = UserBadgeSerializer::class;

    public $include = ['user', 'badge.category', 'user.userBadges'];

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
            new CreateUserBadge(
                $request->getAttribute('actor'),
                Arr::get($request->getParsedBody(), 'data', null)
            )
        );
    }
}
