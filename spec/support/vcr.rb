require 'vcr'

VCR.configure do |c|
  c.cassette_library_dir = File.join(Rails.root, 'spec/fixtures/vcr_cassettes')
  c.hook_into :webmock
  c.default_cassette_options = { match_requests_on: [:uri, :body], record: :none }
  c.ignore_localhost = true
  c.allow_http_connections_when_no_cassette = false
end
