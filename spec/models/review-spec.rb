require 'rails_helper'

RSpec.describe Review, type: :model do
  subject { FactoryBot.create(:review) }

  describe "validations: " do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a title" do
      subject.rating = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a description" do
      subject.binge_val = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a url" do
      subject.educational_val = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a url" do
      subject.entertainment_val = nil
      expect(subject).to_not be_valid
    end
  end

  describe "associations:" do
    it { should
      belong_to(:podcast) }
    it { should
      belong_to(:user) }

  end
end
