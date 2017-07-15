class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  rescue_from UnauthorizedError, with: :expired_session

  private

  def expired_session
    render json: { errors: ['Your session was expired. Please, make your login again'] }
  end
end
