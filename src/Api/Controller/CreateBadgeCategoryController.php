<?php

namespace Gtdxyz\UserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Gtdxyz\UserBadges\BadgeCategory\Command\CreateBadgeCategory;
use Gtdxyz\UserBadges\Api\Serializer\BadgeCategorySerializer;

class CreateBadgeCategoryController extends AbstractCreateController
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
            new CreateBadgeCategory(
                $request->getAttribute('actor'),
                Arr::get($request->getParsedBody(), 'data', null)
            )
        );
    }
}
