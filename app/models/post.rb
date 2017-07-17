class Post
  include Her::Model
  use_api MICROBLOG_API

  collection_path 'api/users/:user_id/posts'

  def self.create(title:, description:, user_id:, access_token:)
    post("api/users/#{user_id}/posts", {
      post: {
        title: title,
        description: description
      },
      access_token: access_token
    })
  end
end
