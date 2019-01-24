require 'rails_helper'

RSpec.describe Creator, type: :model do
  subject { FactoryBot.create(:creator) }

  describe "validations:" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end

  describe "associations:" do
    it { should have_many(:podcasts).through(:podcast_creatorships) }
  end
end
