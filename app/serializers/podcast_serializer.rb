class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :title, :creators

  def creators
    object.creators.pluck(:name)
  end
end
