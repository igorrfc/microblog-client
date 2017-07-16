class PostsController < ApplicationController
  def create
    post = Post.create(params.merge({access_token: auth.token}))

    if post.errors.blank?
      render json: { data: post }, status: :ok
    else
      head :unprocessable_entity
    end
  end
end
