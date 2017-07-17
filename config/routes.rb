Rails.application.routes.draw do
  root to: 'microblog_app#index'

  resource :login, controller: 'login', only: :create
  delete '/logout', to: 'login#destroy'

  resources :users, only: %i[index show] do
    resources :posts, only: :create
    resources :notifications, only: %i[update index]
    collection do
      get :search
      post :follow
    end
  end
end
