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

  def destroy
    target_id = destroy_review_params.to_i
    
    can_delete = (
      !current_user.nil? && (
        current_user == Review.find(target_id).user ||
        current_user.role == "admin"
      )
    )

    if can_delete
      Review.find(target_id).delete
    end
    render json: { "successful": can_delete }
  end

  private
  def destroy_review_params
    params.require(:id)
  end
end
