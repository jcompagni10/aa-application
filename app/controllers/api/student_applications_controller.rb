class Api::StudentApplicationsController < ApplicationController
 
  def create
    @application = StudentApplication.new(application_params)
    if @application.save
      @application.generate_challenge
      begin
        ChallengeMailer.challenge_email(@application, root_url).deliver_now
      rescue
        # allow mailer to fail without crashing program
        puts "email could not be sent"
      end
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

  def application_params
    params.require(:application).permit(:first_name,
                                        :last_name,
                                        :email,
                                        :zip,
                                        :status
                                       )
  end
end
