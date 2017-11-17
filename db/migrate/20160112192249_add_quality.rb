class AddQuality < ActiveRecord::Migration
  def up
    change_column :segments, :quality, :string
    add_column :chapters, :quality, :string
    add_column :parts, :quality, :string
  end
end
