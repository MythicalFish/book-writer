class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :statements, serializer: StatementListSerializer
end
