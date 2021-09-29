Rails.application.routes.draw do
 
  devise_for :users
  root 'hello#index'
  resources :users
  resources :articles
  resources :sessions, only: [:create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
