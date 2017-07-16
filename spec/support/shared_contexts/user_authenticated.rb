RSpec.shared_context 'user authenticated', shared_context: :metadata do
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

  before do
    authentication = AuthenticateUser.new({ user: { email: user.email, password: 'fooweakypassword' }})

    VCR.use_cassette('authenticate_user') do
      authentication.process
    end

    session[:access_token] = authentication.token
    session[:current_user] = authentication.current_user
  end
end
