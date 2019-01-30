class Api::V1::ReviewsController < ApplicationController
  def index
    begin
      render json: Review.where({podcast: Podcast.find(params["podcast_id"])}), each_serializer: PodcastReviewsSerializer
    rescue ActiveRecord::RecordNotFound
      render json: Review.all
    end
  end
  def show
    render json: Review.where({podcast: Podcast.find(params["id"])}), each_serializer: PodcastReviewsSerializer
  end
end
