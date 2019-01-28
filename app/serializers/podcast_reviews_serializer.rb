class PodcastReviewsSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :rating, :comment, :binge_val, :educational_val, :entertainment_val

  def user_name
    object.user.email
  end
end
