class Api::V1::VotesController < ApiController
  def create
    if current_user.nil?
      head 403
    else
      new_vote = Vote.create({
        user_id: current_user.id,
        review_id: params['review_id'],
        value: vote_params['value']
      })

      if !new_vote.persisted?
        new_vote = Vote.find_by({
          user_id: current_user.id,
          review_id: params['review_id']
        })
        new_vote.value = vote_params['value']
        new_vote.save
        render json: new_vote, serializer: VoteConfirmSerializer
      end
    end
  end

  def vote_params
    params.require(:vote).permit(:value)
  end
end
