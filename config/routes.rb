Rails.application.routes.draw do
  root to: 'microblog_app#index'

  resource :login, controller: 'login', only: :create

  resources :users, only: :index do
    collection do
      get :search
      post :follow
    end
  end
end
