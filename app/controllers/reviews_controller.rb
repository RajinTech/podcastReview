class ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def show
  end

  def create
    @review = Review.new(review_params)
    @review.user = current_user
    if @review.save
      render json: { review: @review }
    else
      render json: { error: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params['id'])
    can_edit = (
      !current_user.nil? && (
        current_user == @review.user ||
        current_user.role == "admin"
      )
    )

    if can_edit
      @review.update(review_params)
      if @review.save
        render json: @review, serializer: ReviewEditSerializer
      else
        render json: { error: @review.errors.full_messages },
          status: :unprocessable_entity
      end
    else
      head 403
    end
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
  def review_params
    params.require(:review).permit(:podcast_id, :rating, :binge_val, :educational_val, :entertainment_val, :comment)
  end

  def destroy_review_params
    params.require(:id)
  end

end
