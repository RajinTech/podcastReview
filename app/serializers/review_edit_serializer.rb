class ReviewEditSerializer < ActiveModel::Serializer
  attributes :rating, :comment, :binge_val, :educational_val,
    :entertainment_val
end
