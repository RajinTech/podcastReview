require 'rails_helper'

RSpec.describe Podcast, type: :model do
  subject { FactoryBot.create(:podcast) }

  describe "validations: " do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a title" do
      subject.title = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a description" do
      subject.description = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a url" do
      subject.url = nil
      expect(subject).to_not be_valid
    end

  end

  describe "associations:" do
    it { should have_many(:creators).through(:podcast_creatorships) }
    it { should have_many(:reviews) }
  end

end
