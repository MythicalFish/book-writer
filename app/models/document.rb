class Document < ApplicationRecord

  belongs_to :user
  has_many :statements
  accepts_nested_attributes_for :statements

  def move_statement oldIndex, newIndex
    return if oldIndex == newIndex
    statement = statements[oldIndex]
    temp_position = 10 * newIndex + 10
    temp_position += 1 if oldIndex < newIndex
    temp_position -= 1 if oldIndex > newIndex
    statement.update(position: temp_position)
    sort_statements
  end

  private

  def sort_statements
    statements.all.each_with_index do |s,i|
      position = 10 * i + 10
      s.update(position: position)
    end
  end

end