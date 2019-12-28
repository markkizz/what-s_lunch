const pageComponents = {
  loginMobile: {
    component: "LoginMobile",
    path: "/m.login"
  },
  registerMobile: {
    component: "RegisterMobile",
    path: "/m.register"
  },
  homepage: {
    component: "HomePage",
    path: "/homepage"
  },
  profile: {
    component: "Profile",
    path: "/profile"
  },
  search: {
    component: "Search",
    path: "/Search"
  },
  restaurantDetail: {
    component: "RestaurantDetail",
    path: "/restaurant-detail"
  },
  writeReview: {
    component: "WriteReview",
    path: "/write-review"
  },
};

export default {
  admin: {
    routes: [...Object.values(pageComponents)]
  },
  user: {
    routes: [
      pageComponents.homepage,
      pageComponents.profile,
      pageComponents.search,
      pageComponents.restaurantDetail,
      pageComponents.writeReview
    ]
  },
  guest: {
    routes: [
      pageComponents.homepage,
      pageComponents.search,
      pageComponents.restaurantDetail,
    ]
  }
}