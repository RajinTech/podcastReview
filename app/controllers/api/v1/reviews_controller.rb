class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.all
  end

  def show
    render json: Review.find(params["podcast_id"])
  end
end 
