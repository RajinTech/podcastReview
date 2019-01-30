class PodcastReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :scores, :vote_total

  def scores
    return(
      {
        binge: object.binge_val,
        educational: object.educational_val,
        entertainment: object.entertainment_val
      }
    )
  end

  def vote_total
    object.votes.pluck('value').inject(0, :+)
  end
end
