class RemoveSummaryFromSegments < ActiveRecord::Migration
  def change
    remove_column :segments, :summary, :text
  end
end
