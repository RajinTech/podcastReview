class Podcast < ApplicationRecord
  has_many :podcast_creatorships
  has_many :creators, through: :podcast_creatorships
  has_many :reviews

  validates :title, presence: true
  validates :description, presence: true
  validates :url, presence: true
end
