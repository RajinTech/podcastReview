class Api::V1::VotesController < ApiController
  def create
    if current_user.nil?
      head 403
      return
    else
      new_vote = Vote.create({
        user_id: current_user.id,
        review_id: params['review_id'],
        value: vote_params['value']
      })
    end

    if new_vote.persisted?
      render json: new_vote, serializer: VoteConfirmSerializer
    else
      existing_vote = Vote.find_by({
        user_id: current_user.id,
        review_id: params['review_id']
      })
      existing_vote.value = vote_params['value']
      existing_vote.save
      render json: existing_vote, serializer: VoteConfirmSerializer
    end

  end

  def vote_params
    params.require(:vote).permit(:value)
  end
end
