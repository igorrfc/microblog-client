class AuthenticateUser
  attr_reader :params, :new_user, :token, :current_user

  def initialize(params, new_user: false)
    @params = params[:user]
    @new_user = params[:new_user]
    @token = nil
    @current_user = nil
  end

  def process
    email = new_user ? create_user.email : params[:email]

    session = create_session(email)

    return false unless session.errors.empty?

    @current_user = session.user

    @token = Authorization.generate_token(
      email: email,
      password: params[:password]
    )

    @token.present?
  end

  private

  def create_session(email)
    Session.create(email: email, password: params[:password])
  end

  def create_user
    User.create(
      name: params[:name],
      email: params[:email],
      nickname: params[:nickname],
      password: params[:password]
    )
  end
end
