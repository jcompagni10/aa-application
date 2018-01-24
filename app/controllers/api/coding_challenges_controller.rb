class Api::CodingChallengesController < ApplicationController
  def update
    url = challenge_params[:url]
    code = challenge_params[:code]
    coding_challenge = CodingChallenge.find_by(url: url)
    if coding_challenge
      if coding_challenge.code
        # prevent double submissions
        render json: { errors: ['Can only submit an answer once'] }, status: 422
      else
        coding_challenge.update(code: code)
        render json: { success: true }, status: 200
      end
    else
      # User got to challenge page from an invalid link
      render json: { errors: ['Invalid Coding Challenge Url'] }, status: 422
    end
  end
 
  private

  def challenge_params
    params.require(:coding_challenge).permit(:code, :url)
  end
end
