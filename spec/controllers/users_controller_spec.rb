require 'rails_helper'

describe UsersController, type: :controller do
  describe 'POST #follow' do
    include_context 'user authenticated'

    let(:user) do
      VCR.use_cassette('create_user') do
        User.create(
          name: 'Foo',
          nickname: 'foo',
          email: 'footest1@mail.com',
          password: 'fooweakypassword'
        )
      end
    end

    let(:followed_user) do
      VCR.use_cassette('create_followed_user') do
        User.create(
          name: 'Followed',
          nickname: 'followed',
          email: 'footest2@mail.com',
          password: 'followedweakypassword'
        )
      end
    end

    it 'follows a user' do
      post :follow, params: { id: followed_user.id, follower_id: user.id }
      expect(response).to have_http_status(:ok)
    end
  end
end
