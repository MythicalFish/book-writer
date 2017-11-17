class CreatePieces < ActiveRecord::Migration[5.1]
  def change
    create_table :statements do |t|
      t.string :summary
      t.text :elaboration
      t.integer :order, default: 0
    end
  end
end
