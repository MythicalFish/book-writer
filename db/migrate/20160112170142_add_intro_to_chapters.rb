class AddIntroToChapters < ActiveRecord::Migration
  def change
    add_column :chapters, :intro, :text
  end
end
