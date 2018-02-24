class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date, :notes, :type_id
  belongs_to :type
end
