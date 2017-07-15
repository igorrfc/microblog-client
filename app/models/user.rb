class User
  include Her::Model
  use_api MICROBLOG_API
  include_root_in_json true

  collection_path 'api/users'

  scope :all, -> { get('api/users') }
end
