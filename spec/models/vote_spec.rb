require 'rails_helper'

RSpec.describe Vote, type: :model do
  subject { FactoryBot.create(:user) }
  subject { FactoryBot.create(:vote) }

  describe "validations: " do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a value" do
      subject.value = nil
      expect(subject).to_not be_valid
    end

  describe "associations:" do
    it { should belong_to(:user) }
    it { should belong_to (:review) }
  end
  end
end
