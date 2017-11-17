class ChangeOrderToPosition < ActiveRecord::Migration
  def up
    rename_column :segments, :order, :position
  end
end
