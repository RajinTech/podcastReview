class PodcastsController < ApplicationController
  def index
    @podcasts = Podcast.limit(100)
  end

end
