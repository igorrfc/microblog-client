class MicroblogResponseMiddleware < Faraday::Response::Middleware
  def on_complete(env)
    raise UnauthorizedError if env.response.status == 401

    env[:body] = prepare_response_body(env)
  end

  private

  def prepare_response_body(env)
    body = env[:body][:data]
    body = body[:data] if body[:data].present?
    errors = env[:body][:errors]

    { data: body.merge({ errors: errors }), errors: errors }
  end
end
