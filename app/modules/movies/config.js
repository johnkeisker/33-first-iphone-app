function config($stateProvider) {
  $stateProvider
    .state("index", {
      url:"/",
      controller: "MoviesController as movieCtrl",
      template: require("./views/view.html")
  });
}

export default config;
