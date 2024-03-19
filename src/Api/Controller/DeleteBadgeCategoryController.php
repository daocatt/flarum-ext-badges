<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Gtdxyz\Badges\BadgeCategory\Command\DeleteBadgeCategory;

class DeleteBadgeCategoryController extends AbstractDeleteController
{
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
    protected function delete(ServerRequestInterface $request)
    {
        return $this->bus->dispatch(
            new DeleteBadgeCategory(
                $request->getAttribute('actor'),
                Arr::get($request->getQueryParams(), 'id'),
            )
        );
    }
}
