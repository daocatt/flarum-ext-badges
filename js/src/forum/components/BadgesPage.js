import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import TableView from './views/TableView';
import BlockListView from './views/BlockListView';

export default class BadgesPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    this.bodyClass = 'App--index';

    this.loading = true;

    app.history.push('badges');

    app.setTitle(app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges'));

    // Load badge categories
    app.store.find('badge-categories').then(() => {
      this.loading = false;
      m.redraw();
    });
  }

  view() {
    const categories = app.store.all('badgeCategories').sort((a, b) => a.order() - b.order());

    return (
      <div className="IndexPage">
        {/* {IndexPage.prototype.hero()} */}

        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              <h2 className={'BadgeOverviewTitle'}>{app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')}</h2>

              {this.loading && <LoadingIndicator size={'large'} />}

              {!this.loading &&
                categories.map((category) => {
                  const badges = category.badges().sort((a, b) => a.order() - b.order());
                  if (badges.length > 0) {
                    return (
                      <div className={'BadgeCategory'}>
                        <h3>{category.name()}</h3>
                        {category.description() && <p>{category.description()}</p>}

                        {category.isTable() && <TableView badges={badges} />}

                        {!category.isTable() && <BlockListView badges={badges} />}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
