class AddFilenameToChapters < ActiveRecord::Migration
  def change
    add_column :chapters, :filename, :string
  end
end
