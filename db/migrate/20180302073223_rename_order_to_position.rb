class RenameOrderToPosition < ActiveRecord::Migration[5.1]
  def change
    rename_column :statements, :order, :position
  end
end
