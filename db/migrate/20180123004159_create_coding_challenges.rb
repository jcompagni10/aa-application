class CreateCodingChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :coding_challenges do |t|
      t.string :code
      t.string :url, null: false, index: true
      t.integer :application_id, null: false, index: true
      t.timestamps
    end
  end
end
