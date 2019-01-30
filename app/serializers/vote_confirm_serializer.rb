class VoteConfirmSerializer < ActiveModel::Serializer
  attributes :user_vote, :total_votes

  def user_vote
    object.value
  end

  def total_votes
    object.review.votes.pluck('value').inject(0, :+)
  end
end
