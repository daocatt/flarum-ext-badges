<?php

namespace Gtdxyz\Badges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Flarum\Query\QueryCriteria;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Support\Arr;
use Tobscure\JsonApi\Document;
use Gtdxyz\Badges\UserBadge\Filter\UserBadgeFilterer;
use Gtdxyz\Badges\Api\Serializer\UserBadgeSerializer;
use Gtdxyz\Badges\Models\UserBadgeRepository;

class ListUserBadgesController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = UserBadgeSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ['badge', 'user', 'badge.category'];

    /**
     * {@inheritdoc}
     */
    public $sortFields = ['assignedAt'];

    /**
     * {@inheritdoc}
     */
    public $limit = 20;

    /**
     * @var UserBadgeFilterer
     */
    protected $filterer;

    /**
     * @var UserBadgeRepository
     */
    protected $userBadges;

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(UserBadgeFilterer $filterer, UserBadgeRepository $userBadges, UrlGenerator $url)
    {
        $this->filterer = $filterer;
        $this->userBadges = $userBadges;
        $this->url = $url;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertCan('badges.canViewDetailedUsers');
        
        //filter include user or badge or both
        $filters = $this->extractFilter($request);
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $include = $this->extractInclude($request);
        
        $sort = $this->extractSort($request);
        $sortIsDefault = $this->sortIsDefault($request);

        // if(!isset($filters['user'])){
        //     return [];
        // }
        
        $criteria = new QueryCriteria($actor, $filters, $sort, $sortIsDefault);
        
        $results = $this->filterer->filter($criteria, $limit, $offset);

        $document->addPaginationLinks(
            $this->url->to('api')->route('badge.users.overview'),
            $request->getQueryParams(),
            $offset,
            $limit,
            $results->areMoreResults() ? null : 0
        );

        $results = $results->getResults();
        
        $this->loadRelations($results, $include);

        return $results;
    }
}
