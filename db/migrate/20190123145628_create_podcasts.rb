class CreatePodcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :podcasts do |t|
      t.string :title, null:false
      t.string :description, null:false
      t.string :url, null:false
      t.timestamps
    end
  end
end
