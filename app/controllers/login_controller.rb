class LoginController < ApplicationController
  def create
    authentication = AuthenticateUser.new(params)

    if authentication.process
      session[:access_token] = authentication.token
      session[:current_user] = authentication.current_user
      head :ok
    else
      render json: { errors: ['Authentication has failed'] }, status: :bad_request
    end
  end
end
