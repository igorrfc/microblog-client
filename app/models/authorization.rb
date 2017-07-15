class Authorization
  include Her::Model
  use_api MICROBLOG_API

  collection_path 'oauth/authorize'

  def self.generate_token(email:, password:)
    client = OAuth2::Client.new(ENV['OAUTH_TOKEN'], ENV['OAUTH_SECRET'], site: ENV['MICROBLOG_API'])
    client.password.get_token(email, password).token
  end
end
