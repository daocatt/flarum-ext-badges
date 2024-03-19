export  default class UserBadgesState {
    constructor(app) {
      this.app = app;
  
      /**
       * Whether or not the list are loading.
       *
       * @type {Boolean}
       */
      this.loading = false;
    }
  
    /**
     * Load list into the application's cache if they haven't already
     * been loaded.
     */
    load(username) {

      // if online cross 24H
      if (this.cache) {
        return;
      }
      
      this.loading = true;
      m.redraw();

      this.app.store
        .find('user-badges', {
          filter: {user: username},
        })
        .then((badges) => {
          this.cache = badges;
        })
        .catch(() => {})
        .then(() => {
          this.loading = false;
          m.redraw();
        });
    }
  }
  