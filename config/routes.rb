Rails.application.routes.draw do
  root to: 'microblog_app#index'

  resource :login, controller: 'login', only: :login
end
