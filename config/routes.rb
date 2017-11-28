Rails.application.routes.draw do

  devise_for :users

  root to: 'documents#index', as: 'dashboard'
  resources :documents

end
