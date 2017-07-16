class UsersController < ApplicationController
  def show
    user = User.find(params[:id]).as_json

    render json: { data: user['attributes']  }, status: :ok
  end

  def index
    users = User.all(access_token: session[:access_token])
    render json: {
      data: ResourceCollectionSerializer.serialize(users || [])
    }, status: :ok
  end

  def search
    users = User.search(query: params[:query], access_token: session[:access_token])
    render json: {
      data: ResourceCollectionSerializer.serialize(users || [])
    }, status: :ok
  end

  def follow
    User.follow(
      id: params[:id],
      follower_id: params[:follower_id],
      access_token: session[:access_token]
    )

    head :ok
  end
end
