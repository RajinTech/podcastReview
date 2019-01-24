class Creator < ApplicationRecord
  has_many :podcast_creatorships
  has_many :podcasts, through: :podcast_creatorships

  validates :name, presence: true
end
