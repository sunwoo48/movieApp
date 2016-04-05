app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl(movieService, $routeParams, $location) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
	var ctrl = this;
	ctrl.$routeParams =$routeParams;
	ctrl.movieService = movieService;
	ctrl.movieService.getMovie(ctrl.$routeParams.movieId)
	ctrl.movie = movieService.getMovie($routeParams.movieId);

	ctrl.$location = $location;
	ctrl.listShow = 7;

};

MovieDetailsCtrl.prototype.goHome = function() {
  var ctrl = this;
  ctrl.$location.path('/home');

};


