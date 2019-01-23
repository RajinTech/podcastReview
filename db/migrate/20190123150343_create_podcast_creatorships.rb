class CreatePodcastCreatorships < ActiveRecord::Migration[5.2]
  def change
    create_table :podcast_creatorships do |t|
      t.integer :podcast_id
      t.integer :creator_id
      t.timestamps
    end
  end
end
