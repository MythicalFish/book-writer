class Statement < ApplicationRecord

  before_create :set_position

  belongs_to :document
  default_scope -> { order(:position) }

  private

  def set_position
    if document.statements.any?
      self.position = document.statements.last.position + 10
    else
      self.position = 10
    end
  end

end
