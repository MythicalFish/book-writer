class Document < ApplicationRecord
  belongs_to :user
  has_many :statements

  def path
    "/documents/#{id}"
  end
  
end