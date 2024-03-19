/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/components/UserBadge.tsx":
/*!*********************************************!*\
  !*** ./src/common/components/UserBadge.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);




var UserBadge = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadge, _Component);

  function UserBadge() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserBadge.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.tooltip = this.attrs.tooltip !== false;
    this.forceVisibility = this.attrs.forceVisibility === true;
    this.displayName = this.attrs.displayName === true;
  };

  _proto.view = function view() {
    // Hide badge when not enabled
    if (!this.attrs.badge.isVisible() && !this.forceVisibility) {
      return null;
    } // Just show badge


    if (this.tooltip === false) return this.badge();
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
      text: "" + (this.attrs.badge.description() ? this.attrs.badge.description() : '')
    }, this.badge());
  };

  _proto.badge = function badge() {
    var _this = this;

    var isPartlyHidden = !this.attrs.badge.isVisible() && this.forceVisibility; // This badge is an image

    if (this.attrs.badge.image()) {
      return m("view", {
        style: this.displayName ? "display:flex;justify-content:flex-start;align-items:center;" : "display:inline-block;"
      }, m("img", {
        src: this.attrs.badge.image(),
        className: 'UserBadgeImage',
        onclick: function onclick() {
          if (_this.attrs.onclick) {
            _this.attrs.onclick();
          }
        },
        style: {
          opacity: isPartlyHidden ? 0.5 : undefined
        }
      }), this.displayName && this.attrs.badge.name());
    }

    return m("span", {
      className: "UserBadge UserBadge-" + this.attrs.badge.id(),
      onclick: function onclick() {
        if (_this.attrs.onclick) {
          _this.attrs.onclick();
        }
      },
      style: {
        backgroundColor: this.attrs.badge.backgroundColor(),
        color: this.attrs.badge.labelColor(),
        borderColor: this.attrs.badge.backgroundColor(),
        opacity: isPartlyHidden ? 0.5 : undefined
      }
    }, m("i", {
      className: this.attrs.badge.icon(),
      style: {
        color: this.attrs.badge.iconColor()
      }
    }), " ", this.attrs.badge.name());
  };

  return UserBadge;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('gtdxyz/flarum-user-badges', function () {// console.log('[gtdxyz/flarum-user-badges] Hello, forum and admin!')
});

/***/ }),

/***/ "./src/common/models/Badge.js":
/*!************************************!*\
  !*** ./src/common/models/Badge.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Badge = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Badge, _mixin);

  function Badge() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/badges' + (this.exists ? '/' + this.data.id : '');
  };

  return Badge;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name'),
  icon: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('icon'),
  order: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('order'),
  image: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('image'),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description'),
  isVisible: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isVisible'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt'),
  earnedAmount: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('earnedAmount'),
  category: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('category'),
  backgroundColor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('backgroundColor'),
  iconColor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('iconColor'),
  labelColor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('labelColor')
}));



/***/ }),

/***/ "./src/common/models/BadgeCategory.js":
/*!********************************************!*\
  !*** ./src/common/models/BadgeCategory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeCategory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var BadgeCategory = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeCategory, _mixin);

  function BadgeCategory() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = BadgeCategory.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/badge-categories' + (this.exists ? '/' + this.data.id : '');
  };

  return BadgeCategory;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name'),
  order: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('order'),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description'),
  isEnabled: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isEnabled'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt'),
  isTable: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isTable'),
  users: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('users'),
  badges: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('badges')
}));



/***/ }),

/***/ "./src/common/models/UserBadge.js":
/*!****************************************!*\
  !*** ./src/common/models/UserBadge.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var UserBadge = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadge, _mixin);

  function UserBadge() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = UserBadge.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/user-badges' + (this.exists ? '/' + this.data.id : '');
  };

  return UserBadge;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('user'),
  badge: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('badge'),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description'),
  isPrimary: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isPrimary'),
  assignedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('assignedAt'),
  inUserCard: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('inUserCard')
}));



/***/ }),

/***/ "./src/forum/addBadgesToUserCard.js":
/*!******************************************!*\
  !*** ./src/forum/addBadgesToUserCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addBadgesToUserCard)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UserCardBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserCardBadge */ "./src/forum/components/UserCardBadge.tsx");
/* harmony import */ var _components_UserCardBadgeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UserCardBadgeModal */ "./src/forum/components/UserCardBadgeModal.tsx");
/* harmony import */ var _components_SelectUserCardBadgesModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SelectUserCardBadgesModal */ "./src/forum/components/SelectUserCardBadgesModal.tsx");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__);








function addBadgesToUserCard() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'infoItems', function (items) {
    var _user$attribute;

    // Get user
    var user = this.attrs.user; // Don't show badges

    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('showBadgesOnUserCard') || !user.attribute('badges')) return;
    var visibleBadges = (_user$attribute = user.attribute('badges')) != null ? _user$attribute : []; // No badges to show
    // if (visibleBadges.length < 1 || !visibleBadges) return;

    if (user.attribute('badges_count') <= 0) return;
    var limit = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('numberOfBadgesOnUserCard');
    var badges = visibleBadges.map(function (badgeItem) {
      return m(_components_UserCardBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
        badge: badgeItem.badge,
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_UserCardBadgeModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            badge: badgeItem.badge,
            badgeData: badgeItem
          });
        }
      });
    }); // Manage badges

    if (user === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session.user) && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('editOwnUserCardBadges') || flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('editUserCardBadges')) {
      badges.push(m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.manage_badges')
      }, m("a", {
        href: '#',
        className: "UserBadge more-badges",
        onclick: function onclick(e) {
          e.preventDefault();
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_SelectUserCardBadgesModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
            user: user
          });
        }
      }, m("i", {
        className: 'fas fa-pencil-alt BadgeIconOnly'
      }))));
    }

    items.add('badges', badges);
  });
}

/***/ }),

/***/ "./src/forum/addSidebarNav.js":
/*!************************************!*\
  !*** ./src/forum/addSidebarNav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSidebarNav)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);



function addSidebarNav() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'navItems', function (items) {
    items.add('badges', m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: "fas fa-id-badge",
      href: app.route('badges')
    }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')), 15);
    return items;
  });
}

/***/ }),

/***/ "./src/forum/components/BadgeDetailContent.js":
/*!****************************************************!*\
  !*** ./src/forum/components/BadgeDetailContent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeDetailContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);








var BadgeDetailContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeDetailContent, _Component);

  function BadgeDetailContent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BadgeDetailContent.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode); // Load articles


    this.attrs.state.refreshParams({
      filter: {
        badge: this.attrs.badgeId
      },
      sort: '-assignedAt'
    });
  };

  _proto.view = function view() {
    var state = this.attrs.state;
    var loading = null;

    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default().component({
        size: 'large'
      });
    } else if (state.hasNext()) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
        className: 'Button',
        icon: 'fas fa-chevron-down',
        onclick: state.loadNext.bind(state)
      }, app.translator.trans('core.forum.discussion_list.load_more_button'));
    } // No items


    if (state.isInitialLoading() && state.isEmpty()) {
      return m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), null);
    } // No items


    if (state.isEmpty()) {
      return m("div", {
        className: 'BadgeDetailContent-empty'
      }, app.translator.trans('gtdxyz-flarum-badges.forum.no_received'));
    }

    return m("div", null, m("ul", {
      className: 'BadgeDetailContent'
    }, state.getPages().map(function (pg) {
      return pg.items.map(function (userBadge) {
        return m("li", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: app.route('user', {
            username: userBadge.user().username()
          }),
          className: 'BadgeDetailContent-user'
        }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(userBadge.user()), m("div", {
          className: 'BadgeDetailContentuserinfo'
        }, m("h4", null, userBadge.user().displayName()))));
      });
    })), loading && m("div", {
      className: "SupportSearchList-loadMore"
    }, loading));
  };

  return BadgeDetailContent;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgeDetailPage.js":
/*!*************************************************!*\
  !*** ./src/forum/components/BadgeDetailPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeDetailPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BadgeDetailContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BadgeDetailContent */ "./src/forum/components/BadgeDetailContent.js");
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/UserBadge */ "./src/common/components/UserBadge.tsx");









var BadgeDetailPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeDetailPage, _Page);

  function BadgeDetailPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BadgeDetailPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Page.prototype.oninit.call(this, vnode);

    this.bodyClass = 'App--index';
    var found = app.store.getById('badges', m.route.param('id'));
    this.loading = !found;

    if (!found) {
      // Load badge categories
      app.store.find("badges/" + m.route.param('id')).then(function (badge) {
        _this.loading = false;
        app.history.push('badgeDetailPage', badge.name());

        _this.setTitle(badge);

        m.redraw();
      });
    } else {
      app.history.push('badgeDetailPage', found.name());
      this.setTitle(found);
    }
  };

  _proto.setTitle = function setTitle(badge) {
    app.setTitle(badge.name() + " - " + app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges'));
  };

  _proto.view = function view() {
    var badge = app.store.getById('badges', m.route.param('id'));
    return m("div", {
      className: "IndexPage"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, this.loading && m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: 'large'
    }), !this.loading && m("div", {
      className: 'BadgeDetailContent-Info'
    }, m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      badge: badge,
      tooltip: false
    }), m("div", {
      className: 'BadgeDetailContent-Info-meta'
    }, m("h3", null, badge.name()), m("p", null, badge.description()))), badge && app.forum.attribute('canViewDetailedBadgeUsers') && m("h3", null, app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_by_count', {
      count: badge.earnedAmount()
    })), !this.loading && app.forum.attribute('canViewDetailedBadgeUsers') && m(_BadgeDetailContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      state: app.badgeUserListState,
      badgeId: badge.id()
    })))));
  };

  return BadgeDetailPage;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgeModal.tsx":
/*!*********************************************!*\
  !*** ./src/forum/components/BadgeModal.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GiveBadgeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GiveBadgeModal */ "./src/forum/components/GiveBadgeModal.js");
/* harmony import */ var _utils_hextorgba__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/hextorgba */ "./src/forum/utils/hextorgba.ts");








var BadgeModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeModal, _Modal);

  function BadgeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = BadgeModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.loading = false;
  };

  _proto.className = function className() {
    return 'Modal--small BadgeModal BadgeModal-plain';
  };

  _proto.title = function title() {// return app.translator.trans('gtdxyz-flarum-badges.forum.badge_information');
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", null, m("div", {
      className: "Modal-body"
    }, this.data().toArray()), m("div", {
      className: "Modal-footer"
    }, m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: app.route('badges.detail', {
        id: this.attrs.badge.id()
      }),
      className: 'Button',
      style: {
        margin: '0 10px'
      }
    }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.badge_details')), this.attrs.userBadgeData && app.forum.attribute('canGiveBadge') && m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: 'Button Button--primary',
      onclick: function onclick() {
        if (confirm(app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge_confirm'))) {
          _this.loading = true;

          _this.attrs.userBadgeData["delete"]().then(function () {
            return _this.hide();
          });
        }
      },
      loading: this.loading
    }, app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge'))));
  };

  _proto.data = function data() {
    var _this2 = this;

    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    var radials = (0,_utils_hextorgba__WEBPACK_IMPORTED_MODULE_6__["default"])(this.attrs.badge.backgroundColor(), 0.7);
    var radiale = (0,_utils_hextorgba__WEBPACK_IMPORTED_MODULE_6__["default"])(this.attrs.badge.backgroundColor(), 1); // Badge name

    items.add('name', m("div", {
      className: 'BadgeModalListItem name',
      style: {
        background: "radial-gradient(" + radials + "," + radiale + ")"
      }
    }, this.attrs.badge.image() && m("img", {
      src: this.attrs.badge.image(),
      className: "icon"
    }))); // Badge description

    items.add('description', m("div", {
      className: 'BadgeModalListItem description'
    }, m("p", {
      className: "name"
    }, this.attrs.badge.name()), m("p", null, this.attrs.badge.description()))); // Badge category

    if (this.attrs.userBadgeData) {
      items.add('category', m("div", {
        className: 'BadgeModalListItem category'
      }, m("p", null, this.attrs.badge.category() && this.attrs.badge.category().name(), !this.attrs.badge.category() && app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized'))));
    } // Badge amount
    // if (this.attrs.badge && this.attrs.badge.earnedAmount()) {
    //   items.add(
    //     'earned_amount',
    //     <div className={'BadgeModalListItem'}>
    //       <p>
    //         {app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_count', {
    //           count: this.attrs.badge.earnedAmount(),
    //         })}
    //       </p>
    //     </div>
    //   );
    // }
    // Badge earned on


    if (this.attrs.userBadgeData) {
      var earned_at = dayjs(this.attrs.userBadgeData.assignedAt()).format('YYYY-MM-DD');
      items.add('earned_date', m("div", {
        className: 'BadgeModalListItem earned-on'
      }, m("p", null, earned_at)));
    } // Badge earning reason


    var earning_reason = false;

    if (earning_reason && this.attrs.userBadgeData && (this.attrs.userBadgeData.description() || app.forum.attribute('canGiveBadge'))) {
      items.add('earning_reason', m("div", {
        className: 'BadgeModalListItem'
      }, m("p", null, m("b", null, app.translator.trans('gtdxyz-flarum-badges.forum.badge.earning_reason'), ":")), m("p", null, this.attrs.userBadgeData.description() ? this.attrs.userBadgeData.description() : m("i", null, app.translator.trans('gtdxyz-flarum-badges.forum.badge.no_earning_reason'))), m("p", null, app.forum.attribute('canGiveBadge') && m("a", {
        href: '#',
        onclick: function onclick(e) {
          e.preventDefault();
          app.modal.show(_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            badge: _this2.attrs.userBadgeData
          });
        }
      }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.update_earning_reason')))));
    }

    return items;
  };

  return BadgeModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgesPage.js":
/*!********************************************!*\
  !*** ./src/forum/components/BadgesPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgesPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _View_TableView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./View/TableView */ "./src/forum/components/View/TableView.js");
/* harmony import */ var _View_BlockListView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View/BlockListView */ "./src/forum/components/View/BlockListView.js");








var BadgesPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgesPage, _Page);

  function BadgesPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BadgesPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Page.prototype.oninit.call(this, vnode);

    this.bodyClass = 'App--index';
    this.loading = true;
    app.history.push('badges');
    app.setTitle(app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')); // Load badge categories

    app.store.find('badge-categories').then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.view = function view() {
    var categories = app.store.all('badgeCategories').sort(function (a, b) {
      return a.order() - b.order();
    });
    return m("div", {
      className: "IndexPage"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("h2", {
      className: 'BadgeOverviewTitle'
    }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')), this.loading && m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: 'large'
    }), !this.loading && categories.map(function (category) {
      var badges = category.badges().sort(function (a, b) {
        return a.order() - b.order();
      });

      if (badges.length > 0) {
        return m("div", {
          className: 'BadgeCategory'
        }, m("h3", null, category.name()), category.description() && m("p", null, category.description()), category.isTable() && m(_View_TableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
          badges: badges
        }), !category.isTable() && m(_View_BlockListView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          badges: badges
        }));
      }
    })))));
  };

  return BadgesPage;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/GiveBadgeModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/GiveBadgeModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GiveBadgeModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BadgeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BadgeModal */ "./src/forum/components/BadgeModal.tsx");








var GiveBadgeModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GiveBadgeModal, _Modal);

  function GiveBadgeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = GiveBadgeModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Modal.prototype.oninit.call(this, vnode); // Select image


    this.selectedBadge = this.attrs.badge ? this.attrs.badge.badge() : null; // Current user

    this.user = this.attrs.badge ? this.attrs.badge.user() : this.attrs.user; // User has badge

    this.userHasBadge = false; // Badge model

    this.badge = this.attrs.badge ? this.attrs.badge : app.store.createRecord('userBadges'); // Earning reason

    this.description = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.badge.description());
    app.userBadges.load(this.user.attribute('username')); // List of available bagges

    this.categories = {};
    this.uncategorizedBadges = [];
    this.loading = false; // Load all available badges

    if (!this.attrs.badge) {
      this.loading = true;
      app.store.find('badges', {
        include: 'category'
      }).then(function (badges) {
        badges.forEach(function (badge) {
          // Categorized
          if (badge.category()) {
            var category = badge.category();

            if (!_this.categories[category.id()]) {
              _this.categories[category.id()] = {
                category: category,
                badges: [badge]
              };
            } else {
              _this.categories[category.id()].badges.push(badge);
            }
          } // Uncategorized
          else {
            _this.uncategorizedBadges.push(badge);
          }
        });
        _this.loading = false; // Redraw

        m.redraw();
      });
    }
  };

  _proto.className = function className() {
    return 'Modal--small BadgeModal';
  };

  _proto.title = function title() {
    return app.translator.trans("gtdxyz-flarum-badges.forum." + (this.badge.exists ? 'update' : 'give') + "_badge");
  };

  _proto.content = function content() {
    return m("div", null, m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray())), m("div", {
      className: "Modal-footer"
    }, m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: 'Button Button--primary',
      type: 'submit',
      loading: this.loading,
      disabled: this.userHasBadge
    }, app.translator.trans('core.forum.composer_edit.submit_button'))));
  };

  _proto.fields = function fields() {
    var _this2 = this;

    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())(); // Badge selector

    items.add('badge', m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans('gtdxyz-flarum-badges.forum.badge.badge'))), m("div", {
      className: 'Select'
    }, m("select", {
      value: this.selectedBadge ? this.selectedBadge.id() : 'empty',
      disabled: !!this.attrs.badge,
      onchange: function onchange(e) {
        if (e.target.value === 'empty') return;
        _this2.selectedBadge = app.store.getById('badges', e.target.value); // Check if the user already has this badge

        _this2.checkUserHasBadge(_this2.selectedBadge);
      },
      className: "Select-input FormControl"
    }, m("option", {
      value: 'empty'
    }, app.translator.trans('gtdxyz-flarum-badges.forum.select_badge')), !this.attrs.badge && Object.values(this.categories).map(function (_ref) {
      var category = _ref.category,
          badges = _ref.badges;
      return m("optgroup", {
        label: category.name()
      }, badges.map(function (badge) {
        return m("option", {
          value: badge.id()
        }, badge.name());
      }));
    }), !this.attrs.badge && this.uncategorizedBadges.length >= 1 && m("optgroup", {
      label: app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized')
    }, this.uncategorizedBadges.map(function (badge) {
      return m("option", {
        value: badge.id()
      }, badge.name());
    })), !!this.attrs.badge && m("option", {
      value: this.selectedBadge.id()
    }, this.selectedBadge.name())), m("i", {
      "class": "icon fas fa-caret-down Select-caret"
    })), this.userHasBadge && m("p", {
      className: 'UserHasBadge'
    }, app.translator.trans('gtdxyz-flarum-badges.forum.user_has_badge'))), 30); // Badge description

    items.add('badge_description', m("div", {
      className: 'BadgeModalListItem'
    }, m("p", null, this.selectedBadge ? this.selectedBadge.description() : app.translator.trans('gtdxyz-flarum-badges.forum.select_badge'))), 30); // Badge earning reason

    items.add('description', m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans('gtdxyz-flarum-badges.forum.badge.earning_reason'))), m("textarea", {
      className: "FormControl",
      placeholder: app.translator.trans('gtdxyz-flarum-badges.forum.badge.earning_reason'),
      bidi: this.description
    })), 30);
    return items;
  };

  _proto.checkUserHasBadge = function checkUserHasBadge(badge) {
    var foundBadge = false;
    var currentBadges = app.userBadges.cache || [];
    currentBadges.map(function (userBadge) {
      if (userBadge.badge() == badge) {
        foundBadge = true;
      }
    });
    this.userHasBadge = foundBadge;
    m.redraw();
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    this.loading = true;
    this.badge.save({
      description: this.description(),
      relationships: this.attrs.badge ? {} : {
        badge: this.selectedBadge,
        user: this.user
      }
    }).then(function () {
      // Re-open badge modal
      if (_this3.attrs.badge) {
        app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
          badge: _this3.attrs.badge.badge(),
          userBadgeData: _this3.attrs.badge
        });
      } else {
        _this3.hide();
      }

      m.redraw();
    }, function (response) {
      _this3.loading = false;

      _this3.handleErrors(response);
    });
  };

  return GiveBadgeModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/SelectUserCardBadgesModal.tsx":
/*!************************************************************!*\
  !*** ./src/forum/components/SelectUserCardBadgesModal.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectUserCardBadgesModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/UserBadge */ "./src/common/components/UserBadge.tsx");








var SelectUserCardBadgesModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SelectUserCardBadgesModal, _Modal);

  function SelectUserCardBadgesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SelectUserCardBadgesModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.loading = false;
    this.limit = app.forum.attribute('numberOfBadgesOnUserCard'); // this.selectedBadges = this.attrs.user.attribute('badges');

    this.selectedBadges = this.attrs.user.attribute('badges').filter(function (item) {
      return item.in_uer_card != 0;
    }).map(function (item) {
      return item.id;
    });
    app.userBadges.load(this.attrs.user.attribute('username'));
  };

  _proto.className = function className() {
    return 'Modal--big UserCardBadgesModal';
  };

  _proto.title = function title() {
    return app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.title');
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", null, m("div", {
      className: "Modal-body"
    }, this.data().toArray()), m("div", {
      className: "Modal-footer"
    }, m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: 'Button Button--primary',
      onclick: function onclick() {
        return _this.save();
      },
      loading: this.loading
    }, app.translator.trans('gtdxyz-flarum-badges.forum.save_changes'))));
  };

  _proto.data = function data() {
    var _this2 = this;

    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    var badgesList = app.userBadges.cache || []; // const categories = categorizeUserBadges(badgesList);
    // Badge name

    items.add('info', m("div", {
      className: 'BadgeModalListItem'
    }, m("p", null, app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.description')), m("p", null, app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.select_limit', {
      limit: app.forum.attribute('numberOfBadgesOnUserCard')
    })))); // Loop through all badge categories

    items.add('badge-list', m("div", {
      className: 'UserCardBadgesModalCategory'
    }, badgesList // .sort((a, b) => a.badge().order - b.badge().order)
    .map(function (ubItem) {
      var ubItemId = parseInt(ubItem.id());
      var disabled = _this2.selectedBadges.length >= _this2.limit && _this2.selectedBadges.indexOf(ubItemId) === -1;
      return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
        text: disabled ? app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.hit_limit', {
          limit: app.forum.attribute('numberOfBadgesOnUserCard')
        }) : '',
        position: "bottom"
      }, m("div", {
        className: 'UserCardBadgesModalCategory-badge',
        onclick: function onclick() {
          if (disabled) {
            return;
          }

          var currentIndex = _this2.selectedBadges.indexOf(ubItemId); // Remove from selected list


          if (currentIndex >= 0) {
            _this2.selectedBadges.splice(currentIndex, 1);
          } else {
            // Add to list
            _this2.selectedBadges.push(ubItemId);
          }
        }
      }, m("div", {
        className: 'UserCardBadgesModalCategory-badge-preview'
      }, m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        badge: ubItem.badge(),
        onclick: function onclick() {}
      }), m("div", {
        className: "preview-name"
      }, ubItem.badge().name())), m("div", {
        className: 'UserCardBadgesModalCategory-badge-switch'
      }, flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default().component({
        state: _this2.selectedBadges.indexOf(ubItemId) >= 0,
        disabled: disabled
      }))));
    })));
    return items;
  };

  _proto.save = function save() {
    var _this3 = this;

    this.loading = true;
    this.attrs.user.save({
      userCardBadges: this.selectedBadges
    }).then(function () {
      // Update current user badges store
      _this3.attrs.user.attribute('badges').map(function (badgeItem) {
        badgeItem.in_user_card = _this3.selectedBadges.indexOf(parseInt(badgeItem.id)) >= 0; // badgeItem.pushAttributes({
        //   in_user_card: this.selectedBadges.indexOf(parseInt(badgeItem.id)) >= 0,
        // });
      });

      _this3.hide();
    })["catch"](function () {}).then(function () {
      _this3.loading = false;
      m.redraw();
    });
  };

  return SelectUserCardBadgesModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/UserBadgesContent.js":
/*!***************************************************!*\
  !*** ./src/forum/components/UserBadgesContent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadgesContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/UserBadge */ "./src/common/components/UserBadge.tsx");
/* harmony import */ var _utils_categorizeUserBadges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/categorizeUserBadges */ "./src/forum/utils/categorizeUserBadges.js");
/* harmony import */ var _BadgeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BadgeModal */ "./src/forum/components/BadgeModal.tsx");






var UserBadgesContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadgesContent, _Component);

  function UserBadgesContent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserBadgesContent.prototype;

  _proto.view = function view() {
    var badgesList = app.userBadges.cache || [];
    var categories = (0,_utils_categorizeUserBadges__WEBPACK_IMPORTED_MODULE_3__["default"])(badgesList);
    return m("div", {
      className: "UserBadges"
    }, categories.length === 0 && m("div", {
      className: 'Placeholder'
    }, m("p", null, app.translator.trans('gtdxyz-flarum-badges.forum.user_no_badges'))), categories.length >= 1 && categories.map(function (_ref) {
      var name = _ref.name,
          category = _ref.category,
          badges = _ref.badges;
      if (category && !category.isEnabled()) return null;
      return m("div", {
        className: 'UserBadgesCategory'
      }, m("h3", null, name), category && category.description() && m("p", null, category.description()), badges.sort(function (a, b) {
        return a.badge().order() - b.badge().order();
      }).map(function (userBadge) {
        return m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
          badge: userBadge.badge(),
          onclick: function onclick() {
            return app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
              badge: userBadge.badge(),
              userBadgeData: userBadge
            });
          }
        });
      }));
    }));
  };

  return UserBadgesContent;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/UserBadgesPage.js":
/*!************************************************!*\
  !*** ./src/forum/components/UserBadgesPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadgesPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserBadgesContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserBadgesContent */ "./src/forum/components/UserBadgesContent.js");





var UserBadgesPage = /*#__PURE__*/function (_UserPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadgesPage, _UserPage);

  function UserBadgesPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = UserBadgesPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);

    this.user = null;
    this.loading = true;
    this.loadUser(m.route.param('username'));
    app.userBadges.load(m.route.param('username'));
  };

  _proto.content = function content() {
    if (!this.user || this.loading) {
      return m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default()), {
        size: 46
      });
    }

    if (app.session.user) {
      return _UserBadgesContent__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        user: this.user
      });
    } else {
      return m("div", {
        className: 'Placeholder'
      }, m("p", null, app.translator.trans('gtdxyz-flarum-badges.forum.hidden_badges')));
    }
  };

  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);

    this.user = user;
    this.loading = false; // app.store
    //   .find('user-badges', {
    //     filter: {user: this.user.username()}
    //   })
    //   .then(() => {
    //     this.loading = false;
    //     m.redraw();
    //   });
  };

  return UserBadgesPage;
}((flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/UserCardBadge.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/UserCardBadge.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserCardBadge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);




var UserCardBadge = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserCardBadge, _Component);

  function UserCardBadge() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserCardBadge.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.tooltip = this.attrs.tooltip !== false;
    this.forceVisibility = this.attrs.forceVisibility === true;
    this.item = this.attrs.badge;
  };

  _proto.view = function view() {
    // Hide badge when not enabled
    if (!this.item.isVisible && !this.forceVisibility) {
      return null;
    } // Just show badge


    if (this.tooltip === false) return this.badge();
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
      text: "" + (this.item.description ? this.item.description : '')
    }, this.badge());
  };

  _proto.badge = function badge() {
    var _this = this;

    var isPartlyHidden = !this.item.isVisible && this.forceVisibility; // This badge is an image

    if (this.item.image) {
      return m("img", {
        src: this.item.image,
        className: 'UserBadgeImage',
        onclick: function onclick() {
          if (_this.attrs.onclick) {
            _this.attrs.onclick();
          }
        },
        style: {
          opacity: isPartlyHidden ? 0.5 : undefined
        }
      });
    }

    return m("span", {
      className: "UserBadge UserBadge-" + this.item.id,
      onclick: function onclick() {
        if (_this.attrs.onclick) {
          _this.attrs.onclick();
        }
      },
      style: {
        backgroundColor: this.item.backgroundColor,
        color: this.item.labelColor,
        borderColor: this.item.backgroundColor,
        opacity: isPartlyHidden ? 0.5 : undefined
      }
    }, m("i", {
      className: this.item.icon,
      style: {
        color: this.item.iconColor
      }
    }), " ", this.item.name);
  };

  return UserCardBadge;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/UserCardBadgeModal.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/components/UserCardBadgeModal.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserCardBadgeModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_hextorgba__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hextorgba */ "./src/forum/utils/hextorgba.ts");







var UserCardBadgeModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserCardBadgeModal, _Modal);

  function UserCardBadgeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = UserCardBadgeModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.loading = false;
    this.badgeItem = this.attrs.badge;
    this.badgeData = this.attrs.badgeData;
  };

  _proto.className = function className() {
    return 'Modal--small BadgeModal BadgeModal-plain';
  };

  _proto.title = function title() {// return app.translator.trans('gtdxyz-flarum-badges.forum.badge_information');
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", null, m("div", {
      className: "Modal-body"
    }, this.data().toArray()), m("div", {
      className: "Modal-footer"
    }, m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: app.route('badges.detail', {
        id: this.badgeItem.id
      }),
      className: 'Button',
      style: {
        margin: '0 10px'
      }
    }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.badge_details')), this.badgeData && app.forum.attribute('canGiveBadge') && m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: 'Button Button--primary',
      onclick: function onclick() {
        if (confirm(app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge_confirm'))) {
          _this.loading = true;

          _this.badgeData["delete"]().then(function () {
            return _this.hide();
          });
        }
      },
      loading: this.loading
    }, app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge'))));
  };

  _proto.data = function data() {
    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    var radials = (0,_utils_hextorgba__WEBPACK_IMPORTED_MODULE_5__["default"])(this.badgeItem.background_color, 0.7);
    var radiale = (0,_utils_hextorgba__WEBPACK_IMPORTED_MODULE_5__["default"])(this.badgeItem.background_color, 1); // Badge name

    items.add('name', m("div", {
      className: 'BadgeModalListItem name',
      style: {
        background: "radial-gradient(" + radials + "," + radiale + ")"
      }
    }, this.badgeItem.image && m("img", {
      src: this.badgeItem.image,
      className: "icon"
    }))); // Badge description

    items.add('description', m("div", {
      className: 'BadgeModalListItem description'
    }, m("p", {
      className: "name"
    }, this.badgeItem.name), m("p", null, this.badgeItem.description))); // // Badge category
    // if (this.badgeItem) {
    //   items.add(
    //     'category',
    //     <div className={'BadgeModalListItem category'}>
    //       <p>
    //         {this.badgeItem.category && this.badgeItem.category.name}
    //         {/* Uncategorized */}
    //         {!this.badgeItem.category && app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized')}
    //         {/* <Link
    //           href={app.route("badges.category", {
    //             category: this.badgeItem.category.id,
    //           })}
    //         >
    //           {app.translator.trans(
    //             "gtdxyz-flarum-badges.forum.all_badges"
    //           )}
    //         </Link> */}
    //       </p>
    //     </div>
    //   );
    // }
    // Badge earned on

    if (this.badgeData) {
      var earned_at = dayjs(this.badgeData.assigned_at).format('YYYY-MM-DD');
      items.add('earned_date', m("div", {
        className: 'BadgeModalListItem earned-on'
      }, m("p", null, earned_at)));
    }

    return items;
  };

  return UserCardBadgeModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/View/BlockListView.js":
/*!****************************************************!*\
  !*** ./src/forum/components/View/BlockListView.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockListView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/UserBadge */ "./src/common/components/UserBadge.tsx");





var BlockListView = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlockListView, _Component);

  function BlockListView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlockListView.prototype;

  _proto.view = function view() {
    if (!this.attrs.badges) {
      return null;
    }

    var badges = this.attrs.badges;
    return m("ul", {
      className: 'BadgeCategoryList'
    }, badges.map(function (badge) {
      return m("li", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: app.route('badges.detail', {
          id: badge.id()
        }),
        className: 'BadgeContainer'
      }, m("div", {
        className: 'BadgeContainerInfo'
      }, m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
        badge: badge,
        tooltip: false
      }), app.forum.attribute('canViewDetailedBadgeUsers') && m("p", null, app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_count', {
        count: badge.earnedAmount()
      })))));
    }));
  };

  return BlockListView;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/View/TableView.js":
/*!************************************************!*\
  !*** ./src/forum/components/View/TableView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/UserBadge */ "./src/common/components/UserBadge.tsx");





var TableView = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TableView, _Component);

  function TableView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TableView.prototype;

  _proto.view = function view() {
    if (!this.attrs.badges) {
      return null;
    }

    var badges = this.attrs.badges;
    return m("table", {
      width: '100%',
      className: 'BadgeTable'
    }, m("thead", null, m("tr", null, m("th", {
      scope: "col"
    }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')), m("th", {
      scope: "col"
    }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.description')))), m("tbody", null, badges.map(function (badge) {
      return m("tr", null, m("td", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: app.route('badges.detail', {
          id: badge.id()
        })
      }, m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
        badge: badge,
        tooltip: false
      }))), m("td", null, badge.description(), m("div", {
        className: 'BadgeTableRewarded'
      }, app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_count', {
        count: badge.earnedAmount()
      }))));
    })));
  };

  return TableView;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/UserControls */ "flarum/utils/UserControls");
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_models_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/models/Badge */ "./src/common/models/Badge.js");
/* harmony import */ var _common_models_BadgeCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/models/BadgeCategory */ "./src/common/models/BadgeCategory.js");
/* harmony import */ var _common_models_UserBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/models/UserBadge */ "./src/common/models/UserBadge.js");
/* harmony import */ var _components_UserBadgesPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/UserBadgesPage */ "./src/forum/components/UserBadgesPage.js");
/* harmony import */ var _components_BadgesPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/BadgesPage */ "./src/forum/components/BadgesPage.js");
/* harmony import */ var _components_BadgeDetailPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/BadgeDetailPage */ "./src/forum/components/BadgeDetailPage.js");
/* harmony import */ var _components_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/GiveBadgeModal */ "./src/forum/components/GiveBadgeModal.js");
/* harmony import */ var _addSidebarNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addSidebarNav */ "./src/forum/addSidebarNav.js");
/* harmony import */ var _states_BadgeUsersState__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./states/BadgeUsersState */ "./src/forum/states/BadgeUsersState.js");
/* harmony import */ var _notification_BadgeReceivedNotification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notification/BadgeReceivedNotification */ "./src/forum/notification/BadgeReceivedNotification.js");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flarum/forum/components/NotificationGrid */ "flarum/forum/components/NotificationGrid");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _addBadgesToUserCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addBadgesToUserCard */ "./src/forum/addBadgesToUserCard.js");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _states_UserBadgesState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./states/UserBadgesState */ "./src/forum/states/UserBadgesState.js");






















flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('gtdxyz-flarum-badges', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.models.badges) = _common_models_Badge__WEBPACK_IMPORTED_MODULE_8__["default"];
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.models.badgeCategories) = _common_models_BadgeCategory__WEBPACK_IMPORTED_MODULE_9__["default"];
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.models.userBadges) = _common_models_UserBadge__WEBPACK_IMPORTED_MODULE_10__["default"]; // User.prototype.userBadges = Model.hasMany('userBadges');
  // User.prototype.userPrimaryBadge = Model.hasOne('userPrimaryBadge');

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().userBadges) = new _states_UserBadgesState__WEBPACK_IMPORTED_MODULE_21__["default"]((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default())); // Add user badges to the user profile

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes["user.badges"]) = {
    path: '/u/:username/badges',
    component: _components_UserBadgesPage__WEBPACK_IMPORTED_MODULE_11__["default"]
  }; // Badges overview page

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes.badges) = {
    path: '/badges',
    component: _components_BadgesPage__WEBPACK_IMPORTED_MODULE_12__["default"]
  }; // Future
  // // Badges overview page
  // app.routes["badges.category"] = {
  //   path: "/badges/category/:id",
  //   component: BadgesPage,
  // };
  // Badge detail page

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes["badges.detail"]) = {
    path: '/badges/:id',
    component: _components_BadgeDetailPage__WEBPACK_IMPORTED_MODULE_13__["default"]
  };
  (0,_addSidebarNav__WEBPACK_IMPORTED_MODULE_15__["default"])();
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().badgeUserListState) = new _states_BadgeUsersState__WEBPACK_IMPORTED_MODULE_16__["default"]({}); // Badge received notification

  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().notificationComponents.badgeReceived) = _notification_BadgeReceivedNotification__WEBPACK_IMPORTED_MODULE_17__["default"]; // Enable badge notifications?

  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_18___default().prototype), 'notificationTypes', function (items) {
    items.add('badgeReceived', {
      name: 'badgeReceived',
      icon: 'fas fa-user-tag',
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('gtdxyz-flarum-badges.forum.notification.settings')
    });
  }); // Add uploads to user page menu items

  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'navItems', function (items) {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session.user)) {
      return;
    }

    items.add('badges', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6___default().component({
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('user.badges', {
        username: this.user.username()
      }),
      name: 'badges',
      icon: 'fas fa-user-tag'
    }, [flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('gtdxyz-flarum-badges.forum.badge.badges')]), 15);
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_5___default()), 'moderationControls', function (items, user) {
    // User can give badges
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canGiveBadge')) {
      items.add('test', m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
        icon: "fas fa-user-tag",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
            user: user
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('gtdxyz-flarum-badges.forum.give_badge')));
    }
  });
  (0,_addBadgesToUserCard__WEBPACK_IMPORTED_MODULE_19__["default"])(); // For what???
  // extend(DiscussionListState.prototype, 'requestParams', function (params) {
  //   if (typeof params.include === 'string') {
  //     params.include = [params.include];
  //   } else {
  //     params.include?.push('user.userBadges', 'user.userBadges.badge');
  //   }
  // });
});

/***/ }),

/***/ "./src/forum/notification/BadgeReceivedNotification.js":
/*!*************************************************************!*\
  !*** ./src/forum/notification/BadgeReceivedNotification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeReceivedNotification)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var BadgeReceivedNotification = /*#__PURE__*/function (_Notification) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeReceivedNotification, _Notification);

  function BadgeReceivedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = BadgeReceivedNotification.prototype;

  _proto.icon = function icon() {
    return '';
  };

  _proto.href = function href() {
    return app.route('user.badges', {
      username: app.session.user.username()
    });
  };

  _proto.content = function content() {
    return app.translator.trans('gtdxyz-flarum-badges.forum.notification.title');
  };

  _proto.excerpt = function excerpt() {
    var subject = this.attrs.notification.subject();
    return m("div", null, m("i", {
      className: "icon " + subject.badge().icon()
    }), subject.badge().name());
  };

  return BadgeReceivedNotification;
}((flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/states/BadgeUsersState.js":
/*!*********************************************!*\
  !*** ./src/forum/states/BadgeUsersState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeUsersState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/states/PaginatedListState */ "flarum/common/states/PaginatedListState");
/* harmony import */ var flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2__);




var BadgeUsersState = /*#__PURE__*/function (_PaginatedListState) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BadgeUsersState, _PaginatedListState);

  function BadgeUsersState(params, page) {
    if (page === void 0) {
      page = 1;
    }

    return _PaginatedListState.call(this, params, page, 18) || this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeUsersState, [{
    key: "type",
    get: function get() {
      return 'user-badges';
    }
  }]);

  return BadgeUsersState;
}((flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/forum/states/UserBadgesState.js":
/*!*********************************************!*\
  !*** ./src/forum/states/UserBadgesState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadgesState)
/* harmony export */ });
var UserBadgesState = /*#__PURE__*/function () {
  function UserBadgesState(app) {
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


  var _proto = UserBadgesState.prototype;

  _proto.load = function load(username) {
    var _this = this;

    // if online cross 24H
    if (this.cache) {
      return;
    }

    this.loading = true;
    m.redraw();
    this.app.store.find('user-badges', {
      filter: {
        user: username
      }
    }).then(function (badges) {
      _this.cache = badges;
    })["catch"](function () {}).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return UserBadgesState;
}();



/***/ }),

/***/ "./src/forum/utils/categorizeUserBadges.js":
/*!*************************************************!*\
  !*** ./src/forum/utils/categorizeUserBadges.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ categorizeUserBadges)
/* harmony export */ });
function categorizeUserBadges(badges) {
  var categories = {};
  var uncategorized = [];
  var badgesList = badges || [];
  badgesList.map(function (userBadge) {
    if (!userBadge) return null; // Categorized

    if (userBadge.badge().category()) {
      var category = userBadge.badge().category();

      if (!categories[category.id()]) {
        categories[category.id()] = {
          name: category.name(),
          category: category,
          badges: [userBadge]
        };
      } else {
        categories[category.id()].badges.push(userBadge);
      }
    } // Uncategorized
    else {
      uncategorized.push(userBadge);
    }
  }); // Sort categories and map them into an array

  var sortedCategories = Object.keys(categories).sort(function (a, b) {
    return categories[a].category.order() - categories[b].category.order();
  }).map(function (category) {
    return categories[category];
  }); // Add uncategorized category to list

  if (uncategorized.length >= 1) {
    sortedCategories.push({
      name: app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized'),
      category: null,
      badges: uncategorized
    });
  }

  return sortedCategories;
}

/***/ }),

/***/ "./src/forum/utils/hextorgba.ts":
/*!**************************************!*\
  !*** ./src/forum/utils/hextorgba.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hextorgba)
/* harmony export */ });
function hextorgba(hexcolor, opacity) {
  // return if hexcolor is undefined or shorter than 4 characters, shortest hex form is #333;
  // decided against regex hex color validation for performance considerations
  if (!hexcolor || hexcolor.length < 4) {
    return '';
  }

  var hexnumbers = hexcolor.replace('#', '');

  if (hexnumbers.length === 3) {
    hexnumbers += hexnumbers;
  }

  var r = parseInt(hexnumbers.slice(0, 2), 16);
  var g = parseInt(hexnumbers.slice(2, 4), 16);
  var b = parseInt(hexnumbers.slice(4, 6), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/states/PaginatedListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/states/PaginatedListState']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/states/PaginatedListState'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/NotificationGrid":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationGrid']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/NotificationGrid'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/forum/states/DiscussionListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/states/DiscussionListState']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/DiscussionListState'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "flarum/utils/UserControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/UserControls']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/UserControls'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map