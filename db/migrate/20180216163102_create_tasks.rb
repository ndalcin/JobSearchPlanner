class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.datetime :date
      t.string :description
      t.integer :type_id 
      t.timestamps
    end
  end
end
