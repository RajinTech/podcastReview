class PodcastCreatorship < ApplicationRecord
  belongs_to :creator
  belongs_to :podcast
end
