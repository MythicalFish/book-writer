class RemoveBodyFromSegments < ActiveRecord::Migration
  def up
    remove_column :segments, :body
  end
end
