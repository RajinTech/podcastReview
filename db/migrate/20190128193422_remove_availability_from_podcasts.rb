class RemoveAvailabilityFromPodcasts < ActiveRecord::Migration[5.2]
  def change
    remove_column :podcasts, :availability, :string
  end
end
