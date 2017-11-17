class AddAttributesToEverything < ActiveRecord::Migration
  def change
    add_column :parts, :summary, :text
    add_column :parts, :draft_text, :text
    add_column :parts, :use_draft_text, :boolean
    add_column :chapters, :summary, :text
    add_column :chapters, :draft_text, :text
    add_column :chapters, :use_draft_text, :boolean
    add_column :segments, :summary, :text
    add_column :segments, :draft_text, :text
    add_column :segments, :use_draft_text, :boolean
  end
end
