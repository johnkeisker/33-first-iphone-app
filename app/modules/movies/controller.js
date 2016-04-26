class MoviesController {
  constructor($ionicModal, $scope, $http) {
    this.movie = "";
    this.movies = [];
    this._$http = $http;
    this.modal = $ionicModal.fromTemplate(require('./views/form.html'), {
      scope: $scope
    });

  }

  showForm() {
    this.modal.show();
  }

  addMovie() {
    this._$http
      .get(`http://www.omdbapi.com/?t=${this.movie}&y=&plot=short&r=json`)
      .then((response) => {
        this.movies.push(response.data);
        this.movie = "";
        this.modal.hide();
        console.log(this.movies);
      });

  }
}

export default MoviesController;
