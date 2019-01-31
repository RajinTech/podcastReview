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

      returned_json.each_with_index do |review, i|
        puts review
        expect(review).to include( 'id' => i+1 )
        expect(review).to include( 'rating' => i+1 )
        expect(review).to include( 'scores' => {
          'binge' => i+1, 'educational' => i+1, 'entertainment' => i+1
        })
        expect(review).to include( 'comment' => 'great podcast' )
        expect(review).to include( 'total_votes' => 0 )
        expect(review).to include( 'user_vote' => 0 )
      end
    end
  end
end
