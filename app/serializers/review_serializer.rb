class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :scores, :total_votes, :user_vote

  def scores
    return(
      {
        binge: object.binge_val,
        educational: object.educational_val,
        entertainment: object.entertainment_val
      }
    )
  end

  def total_votes
    object.votes.pluck('value').inject(0, :+)
  end

  def user_vote
    if current_user.nil?
      return 0
    else
      begin
        return Vote.find_by({
          user_id: current_user.id,
          review_id: object.id
        }).value
      rescue NoMethodError
        return 0
      end
    end
  end
end
