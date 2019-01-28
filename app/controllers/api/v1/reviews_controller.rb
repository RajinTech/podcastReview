class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.all
  end
  def show
    render json: Review.where({podcast: Podcast.find(params["id"])}), each_serializer: PodcastReviewsSerializer
  end
end
