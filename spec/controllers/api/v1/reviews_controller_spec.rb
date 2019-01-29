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

  describe "GET#show" do
    it 'should return the reviews of a single podcast' do
      id = Podcast.first.id
      get :show, params: {id: id}
      returned_json = JSON.parse(response.body)
      expect(returned_json).to eq(
        [
          {"id"=>1, "rating"=>1, "binge_val"=>1, "educational_val"=>1, "entertainment_val"=>1, "comment"=>"great podcast"},
          {"id"=>2, "rating"=>2, "binge_val"=>2, "educational_val"=>2, "entertainment_val"=>2, "comment"=>"great podcast"},
          {"id"=>3, "rating"=>3, "binge_val"=>3, "educational_val"=>3, "entertainment_val"=>3, "comment"=>"great podcast"}
        ]
      )
    end
  end
end
