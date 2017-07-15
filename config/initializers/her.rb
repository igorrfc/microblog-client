require 'microblog_response_middleware'

MICROBLOG_API = Her::API.new

MICROBLOG_API.setup url: ENV['MICROBLOG_API'] do |c|
  c.use Faraday::Request::UrlEncoded

  c.use MicroblogResponseMiddleware

  c.use Her::Middleware::DefaultParseJSON

  c.use Faraday::Adapter::NetHttp
end
