class PodcastShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :creators, :description, :url, :availability

  def creators
    object.creators.pluck(:name)
  end
end
