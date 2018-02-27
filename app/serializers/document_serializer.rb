class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :title, :path
  has_many :statements, serializer: StatementListSerializer
end
