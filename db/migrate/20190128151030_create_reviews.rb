class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null:false
      t.string :comment
      t.integer :binge_val
      t.integer :educational_val
      t.integer :entertainment_val

      t.belongs_to :podcast
      t.belongs_to :user

      t.timestamps
    end
  end
end
