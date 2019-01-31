class Api::V1::ReviewsController < ApiController
  def index
    begin
      render json: Review.where({podcast: Podcast.find(params["podcast_id"])}), each_serializer: ReviewSerializer
    rescue ActiveRecord::RecordNotFound
      render json: Review.all
    end
  end

  def show
    render json: Review.find(params["id"]), serializer: ReviewSerializer
  end
end
