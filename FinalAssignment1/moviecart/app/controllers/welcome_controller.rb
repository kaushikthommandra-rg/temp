class WelcomeController < ApplicationController
  def index
    # c = RestClient.get 'http://api.themoviedb.org/3/discover/movie?api_key=a47f6e93a831114c8715eeedbc10adc3&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    # result  = ActiveSupport::JSON.decode(c.body)
    # result["results"].each do |movie|
    #   m = Movie.new()
    #
    #   m.movie_id = movie['id']
    #   m.vote_average = movie['vote_average']
    #   m.title = movie['title']
    #   m.poster_path = movie['poster_path']
    #   m.overview = movie['overview']
    #   m.release_date= movie['release_date']
    #   m.save
    # end
  end
end
