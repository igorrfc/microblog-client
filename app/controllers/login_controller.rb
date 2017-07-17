class LoginController < ApplicationController
  def create
    authentication = AuthenticateUser.new(params)

    if authentication.process
      session[:access_token] = authentication.token
      session[:current_user] = authentication.current_user
      render json: { data: authentication.current_user }, status: :ok
    else
      render json: { errors: ['Authentication has failed'] }, status: :bad_request
    end
  end

  def destroy
    session[:access_token] = nil
    session[:current_user] = nil
    head :ok
  end
end
