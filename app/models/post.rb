class Post
  include Her::Model
  use_api MICROBLOG_API

  collection_path 'api/users/:user_id/posts'
end
