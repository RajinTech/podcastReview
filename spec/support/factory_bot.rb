require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :podcast do
    sequence(:title) {|n| "Cool Podcast #{n}" }
    description { "It's a cool podcast" }
    url { "coolpodcast.com" }
    #association :creator
  end

  factory :creator do |n|
    sequence(:name) {|n| "Tyler #{n}" }
    # association :podcast
  end

  factory :review do |n|
    sequence(:rating) { |n| n }
    sequence(:binge_val) { |n| n }
    sequence(:educational_val) { |n| n}
    sequence(:entertainment_val) { |n| n }
    comment { "great podcast" }
    association :user
  end
end
