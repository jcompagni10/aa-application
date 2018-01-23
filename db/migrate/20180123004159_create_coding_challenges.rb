class CreateCodingChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :coding_challenges do |t|
      t.string :code, null: false
      t.string :url, null: false
      t.boolean :application_id, null: false
      t.timestamps
    end
  end
end
