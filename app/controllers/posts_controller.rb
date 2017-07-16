class PostsController < ApplicationController
  def create
    post = Post.create(params.merge({access_token: session[:access_token]}))

    if post.errors.blank?
      render json: { data: post }, status: :ok
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end
end
