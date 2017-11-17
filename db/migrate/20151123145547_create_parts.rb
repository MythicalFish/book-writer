class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.string :title
      t.integer :number
    end
    add_column :chapters, :part_id, :integer
    add_index :chapters, :part_id
  end
end
