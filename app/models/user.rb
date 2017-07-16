class User
  include Her::Model
  use_api MICROBLOG_API
  custom_get :search

  collection_path 'api/users'

  scope :all, -> (access_token:) { get("api/users?access_token=#{access_token}") }

  def self.follow(id:, follower_id:, access_token:)
    post("api/users/#{id}/follow", { follower_id: follower_id, access_token: access_token })
  end

  def self.create(name:, email:, nickname:, password:)
    post('api/users', {
      user: {
        name: name,
        email: email,
        nickname: nickname,
        password: password
      }
    })
  end
end
