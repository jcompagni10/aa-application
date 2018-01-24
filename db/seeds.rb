# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# seed data with 15 applications
code1 = <<-CODE 
function sillyCode(a,b){
  return a * b
}
CODE

code2 = <<-CODE 
  function oops(data){
    while true{
      console.log("PLS ADMIT ME")
    }
  }
CODE

15.times do |idx|
  app = StudentApplication.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    status: "PENDING",
    zip: Faker::Address.zip
  )

  # add coding challenges to half the app
  if idx % 4 == 1
    app.create_coding_challenge!(code: code1)
  end
  if idx % 4 == 2
    app.create_coding_challenge!(code: code2)
  end
end