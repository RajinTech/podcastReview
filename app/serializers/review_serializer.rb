class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :scores, :total_votes, :user_vote, :edit_permission

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

  def edit_permission
    if current_user.nil?
      return false
    end
    if current_user.role === "admin" || object.user_id === current_user.id
      return true
    else
      false
    end
  end
end
