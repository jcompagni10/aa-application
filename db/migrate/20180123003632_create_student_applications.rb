class CreateStudentApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :student_applications do |t|
      t.string :first_name, null: false, index: true 
      t.string :last_name, null: false, index: true 
      t.string :email, null: false 
      t.string :zip, null: false 
      t.string :status, null: false, default: :PENDING
      t.timestamps
    end
  end
end
