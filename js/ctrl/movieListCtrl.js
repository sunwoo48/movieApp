app.controller('MovieListCtrl', MovieListCtrl);

function MovieListCtrl(movieService, $location) {
  /*TODO #3: Load all of the movies from the movieService*/
  var ctrl = this;
  ctrl.movies = MOVIE_DATA;
  ctrl.movieService = movieService;
  ctrl.$location = $location;

  ctrl.movies = ctrl.movieService.getMovies();



  ctrl.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
]
  ctrl.selectedItem = ctrl.sortOptions[0];
  ctrl.curPage = 0;
  ctrl.moviesPerPage = 4;
  ctrl.numPages = Math.ceil(ctrl.movies.length / ctrl.moviesPerPage);
    
};

MovieListCtrl.prototype.goToMovie = function(id) {
  var ctrl = this;
  ctrl.$location.path('/movie/' + id);

};

