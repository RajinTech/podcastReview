require 'rails_helper'

RSpec.describe User, type: :model do
  context "successfully created user added to database:" do
    it "user.all returns one user after creating an instance of User" do
      user = User.create(email: "test@test.com", password: "password", password_confirmation: "password")
      expect(User.all.length).to eq(1)
    end
  end
end
