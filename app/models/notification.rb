class Notification
  include Her::Model
  use_api MICROBLOG_API

  collection_path 'api/users/:user_id/notifications/:id'

  scope :all, -> (user_id:, access_token:) { get("api/users/#{user_id}/notifications?access_token=#{access_token}") }

  def self.update(id:, user_id:, notification:, access_token:)
    put("api/users/#{user_id}/notifications/#{id}", {
      notification: notification,
      access_token: access_token
    })
  end
end
