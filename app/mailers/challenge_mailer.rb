class ChallengeMailer < ApplicationMailer
  def challenge_email(application, root_url)
    @application = application
    @root_url = root_url
    @challenge = application.coding_challenge
    mail(to: @application.email, subject: 'Take the a/A Coding challenge')
  end
end
