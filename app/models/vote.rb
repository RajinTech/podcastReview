class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :value, presence: true, inclusion: {in: [-1, 0, 1]}
  validates :user_id, uniqueness: {scope: :review_id}
end
