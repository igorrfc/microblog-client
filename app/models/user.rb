class User
  include Her::Model
  use_api MICROBLOG_API
  include_root_in_json true

  scope :all, -> { get('users') }
end
