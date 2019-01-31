class PodcastsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def show
  end

  def new
  end

  def create
    podcast_only = podcast_params.delete_if { |k, v| k == "creatorOne" || k == "creatorTwo" || k == "creatorThree" }
    @podcast = Podcast.new(podcast_only)

    creator_one = params[:podcast][:creatorOne]
    creator_two = params[:podcast][:creatorTwo]
    creator_three = params[:podcast][:creatorThree]

    if @podcast.save
      if creator_one
        @podcast.creators.create({name: creator_one})
      end

      if creator_two
        @podcast.creators.create({name: creator_two})
      end

      if creator_three
        @podcast.creators.create({name: creator_three})
      end

      render json: { podcast: @podcast }

    else
      render json: { error: @podcast.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def podcast_params
    params.require(:podcast).permit(:title, :url, :description, :creatorOne, :creatorTwo, :creatorThree)
  end

end
