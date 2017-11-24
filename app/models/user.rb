class User < ApplicationRecord

  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable

  has_many :documents
end
