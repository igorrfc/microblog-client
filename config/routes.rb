Rails.application.routes.draw do
  root to: 'microblog_app#index'

  resource :login, controller: 'login', only: :create

  resources :users, only: :index do
    resources :posts, only: :create
    collection do
      get :search
      post :follow
    end
  end
end
