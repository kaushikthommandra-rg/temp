class MoviesController < ApplicationController
  def index
    @movies = Movie.all
    # render component: 'Movies', props: {movies: @movies}
  end
  def show
    @movie = Movie.find_by_movie_id(params[:id])
  end
end
