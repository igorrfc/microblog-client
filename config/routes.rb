Rails.application.routes.draw do
  root to: 'microblog_app#index'

  resource :login, controller: 'login', only: :login

  resources :users, only: :index do
    collection do
      get :search
      post :follow
    end
  end
end
