class Review < ApplicationRecord
  belongs_to :podcast
  belongs_to :user, optional: true

  validates :rating, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
  validates :binge_val, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
  validates :educational_val, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
  validates :entertainment_val, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
end
