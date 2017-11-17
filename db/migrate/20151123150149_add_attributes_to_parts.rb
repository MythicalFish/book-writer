class AddAttributesToParts < ActiveRecord::Migration
  def change
    add_column :parts, :description, :text
  end
end
