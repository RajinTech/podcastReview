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

  private
  def review_params
    params.require(:review).permit(:podcast_id, :rating, :binge_val, :educational_val, :entertainment_val, :comment)
  end

end
