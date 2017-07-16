class NotificationsController < ApplicationController
  def index
    notifications = Notification.all(user_id: params[:user_id], access_token: session[:access_token])

    render json: {
      data: ResourceCollectionSerializer.serialize(notifications || [])
    }, status: :ok
  end

  def update
    notification = Notification.update(
      id: params[:id],
      user_id: params[:user_id],
      notification: params[:notification],
      access_token: session[:access_token]
    )

    if notification.errors.empty?
      render json: { data: notification }, status: :ok
    else
      render json: { errors: notification.errors }, status: :unprocessable_entity
    end
  end
end
