class AddDescriptionToTypes < ActiveRecord::Migration[5.1]
  def change
    add_column :types, :description, :string
  end
end
