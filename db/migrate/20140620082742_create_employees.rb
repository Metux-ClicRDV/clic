class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :img_url
      t.string :name
      t.string :alias
      t.date :birthday
      t.string :email
      t.string :role
      t.string :ilike

      t.timestamps
    end
  end
end
