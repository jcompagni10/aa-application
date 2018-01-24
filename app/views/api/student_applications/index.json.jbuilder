@applications.each do |application|
json.set! application.id do 
    json.partial! 'api/student_applications/application.json.jbuilder',
                  application: application
  end
end