class ReviewEditSerializer < ActiveModel::Serializer
  attributes :rating, :comment, :binge_val, :educational_val,
    :entertainment_val, :username

    def username
      if object.user == nil
        ""
      else
        object.user.email
      end
    end
end
