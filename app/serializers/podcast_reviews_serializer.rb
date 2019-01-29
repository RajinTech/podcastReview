class PodcastReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :binge_val, :educational_val, :entertainment_val
end
