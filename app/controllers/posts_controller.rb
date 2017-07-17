class PostsController < ApplicationController
  def create
    post = Post.create(
      title: post_params[:title],
      description: post_params[:description],
      access_token: session[:access_token],
      user_id: params[:user_id],
    )

    if post.errors.blank?
      render json: { data: post.as_json['attributes'] }, status: :ok
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description)
  end
end
