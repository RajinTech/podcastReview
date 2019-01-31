require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  before :each do
    podcast = FactoryBot.create(:podcast)
    user = FactoryBot.create(:user)
    3.times do |i|
      podcast.reviews << Review.create({"id"=>i+1, "user_id"=>user.id, "rating"=>i+1, "binge_val"=>i+1, "educational_val"=>i+1, "entertainment_val"=>i+1, "comment"=>"great podcast"
      })
    end
  end

  describe "GET#index" do
    it 'should return the reviews of a single podcast' do
      id = Podcast.first.id
      get :index, params: {podcast_id: id}
      returned_json = JSON.parse(response.body)
      expect(returned_json).to eq(
        [{"id"=>1, "rating"=>1, "comment"=>"great podcast", "scores"=>{"binge"=>1, "educational"=>1, "entertainment"=>1}, "total_votes"=>0, "user_vote"=>0},
       {"id"=>2, "rating"=>2, "comment"=>"great podcast", "scores"=>{"binge"=>2, "educational"=>2, "entertainment"=>2}, "total_votes"=>0, "user_vote"=>0},
       {"id"=>3, "rating"=>3, "comment"=>"great podcast", "scores"=>{"binge"=>3, "educational"=>3, "entertainment"=>3}, "total_votes"=>0, "user_vote"=>0}]
      )
    end
  end
end
