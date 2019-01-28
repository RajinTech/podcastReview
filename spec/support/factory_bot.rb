require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :podcast do |n|
    title { "Cool Podcast #{n}" }
    description { "It's a cool podcast" }
    url { "coolpodcast.com" }
    availability { "yesnomaybe" }
    #association :creator
  end

  factory :creator do |n|
    name { "Tyler #{n}" }
    # association :podcast
  end

end
