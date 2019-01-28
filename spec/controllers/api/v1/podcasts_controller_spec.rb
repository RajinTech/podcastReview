require "rails_helper"

RSpec.describe Api::V1::PodcastsController, type: :controller do

    let!(:first_podcast) {FactoryBot.create!(:podcast)}
    let!(:second_podcast) {FactoryBot.create!(:podcast)}
    let!(:third_podcast) {FactoryBot.create!(:podcast)}
    let!(:fourth_podcast) {FactoryBot.create!(:podcast)}

    let!(:first_creator) {FactoryBot.create!(:creator)}
    let!(:second_creator) {FactoryBot.create!(:creator)}
    let!(:third_creator) {FactoryBot.create!(:creator)}
    let!(:fourth_creator) {FactoryBot.create!(:creator)}

end
