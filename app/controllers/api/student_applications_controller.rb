class Api::StudentApplicationsController < ApplicationController

  def create
    @application = StudentApplication.new(application_params)
    if @application.save
      @application.generate_challenge
      send_email(@application)
      render :show
    else
      render json: { errors: @application.errors.full_messages }, status: 422
    end
  end

  def show
    @application = StudentApplication.find_by(id: params[:id])
    if @application
      render :show
    else
      render json: {}, status: 404
    end
  end

  def update
    @application = StudentApplication.find_by(id: params[:id])
    if @application
      @application.update(application_params)
      render :show
    else
      render json: {}, status: 404
    end
  end

  def index
    @applications = StudentApplication.all
  end

  private

  def send_email(application)
    email_content = render_to_string(
      template: 'challenge_mailer/challenge_email', 
      locals: { application: application, root_url: root_url }
    )
    HTTParty.post(
      "http://juliancompagniportis.com/webmail/mailAPI.php", 
      body: {
        mailCode: 10,
        to: application.email,
        from: "admissions@appacademy.io",
        subject: "a/A Coding Challenge",
        message: email_content
      }
    )
  end

  def application_params
    params.require(:application).permit(:first_name,
                                        :last_name,
                                        :email,
                                        :zip,
                                        :status
                                       )
  end
end
