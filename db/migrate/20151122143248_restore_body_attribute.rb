class RestoreBodyAttribute < ActiveRecord::Migration
  def up
    add_column :segments, :body, :text
  end
end
