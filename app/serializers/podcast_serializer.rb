class PodcastSerializer < ActiveModel::Serializer
  attributes :title, :creators

  def creators
    object.creators.pluck(:name)
  end
end
