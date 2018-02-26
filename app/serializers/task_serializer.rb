class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date, :notes, :type_id, :date_formatted
  belongs_to :type
end
