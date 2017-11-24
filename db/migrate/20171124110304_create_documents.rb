class CreateDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :documents do |t|
      t.string :title, null: false 
      t.references :user
    end
    add_index :documents, :title
    add_column :statements, :document_id, :integer
    add_index :statements, :document_id
    add_index :statements, :order
  end
end
