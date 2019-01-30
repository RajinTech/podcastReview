class Api::V1::PodcastsController < ApiController
  def index
    render json: Podcast.all
  end

  def show
    render json: Podcast.find(params["id"]), serializer: PodcastShowSerializer
  end
end
