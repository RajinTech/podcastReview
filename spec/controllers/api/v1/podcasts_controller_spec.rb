require "rails_helper"

RSpec.describe Api::V1::PodcastsController, type: :controller do
  before :each do
    3.times do |i|
      podcast = FactoryBot.create(:podcast)
      podcast.creators << FactoryBot.create(:creator)
    end
  end

  describe "GET#index" do
    it 'should return a list of podcasts' do
      get :index
      returned_json = JSON.parse(response.body)
      expect(returned_json).to eq(
        [
          {"id"=>1, "title"=>"Cool Podcast 1", "creators"=>["Tyler 1"]},
          {"id"=>2, "title"=>"Cool Podcast 2", "creators"=>["Tyler 2"]},
          {"id"=>3, "title"=>"Cool Podcast 3", "creators"=>["Tyler 3"]}
        ]
      )
    end
  end

  describe "GET#show" do
    it 'should return the information of a single podcast' do
      id = Podcast.first.id
      get :show, params: {id: id}
      returned_json = JSON.parse(response.body)
      expect(returned_json).to eq(
        {
          "id" => id,
          "title" => "Cool Podcast #{id}",
          "creators" => ["Tyler #{id}"],
          "description" => "It's a cool podcast",
          "url" => "coolpodcast.com"
        }
      )
    end
  end
end
