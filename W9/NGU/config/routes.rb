
 # devise_for :user
 # resources :users
 # resources :articles
 # resources :sessions, only: [:create, :destroy]

 Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/articles', to: 'articles#index'
      post '/articles', to: 'articles#create'
      get '/articles/:id', to: 'articles#show'
      patch '/articles/:id', to: 'articles#update'
      delete '/articles/:id', to: 'articles#destroy'
    end
  end
end
  
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


