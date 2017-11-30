class Document < ApplicationRecord

  belongs_to :user
  has_many :statements
  accepts_nested_attributes_for :statements

  def path
    "/documents/#{id}"
  end
  
end