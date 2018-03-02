class StatementSerializer < ActiveModel::Serializer
  attributes :id, :summary, :position, :elaboration
end
