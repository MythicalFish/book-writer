class AddAttributesToSegments < ActiveRecord::Migration
  def up
    add_column :segments, :quality, :integer
    add_column :segments, :source_text, :text
    add_column :segments, :summary, :text
  end
end
