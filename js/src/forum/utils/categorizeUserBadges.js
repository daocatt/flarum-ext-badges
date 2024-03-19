export default function categorizeUserBadges(badges) {
  const categories = {};
  const uncategorized = [];
  const badgesList = badges || [];

  badgesList.map((userBadge) => {
    if (!userBadge) return null;

    // Categorized
    if (userBadge.badge().category()) {
      const category = userBadge.badge().category();

      if (!categories[category.id()]) {
        categories[category.id()] = {
          name: category.name(),
          category,
          badges: [userBadge],
        };
      } else {
        categories[category.id()].badges.push(userBadge);
      }
    }
    // Uncategorized
    else {
      uncategorized.push(userBadge);
    }
  });

  // Sort categories and map them into an array
  let sortedCategories = Object.keys(categories)
    .sort((a, b) => categories[a].category.order() - categories[b].category.order())
    .map((category) => categories[category]);

  // Add uncategorized category to list
  if (uncategorized.length >= 1) {
    sortedCategories.push({
      name: app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized'),
      category: null,
      badges: uncategorized,
    });
  }

  return sortedCategories;
}
