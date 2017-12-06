Rails.application.routes.draw do

  devise_for :users

  # Root and /:id both go to documents#index, and just let vue
  # do the rest. :)
  root to: 'documents#index', as: 'dashboard'
  get '/:id', to: 'documents#index'

  # To be called by vue-resourses
  resources :documents, except: [:edit] do
    resources :statements, except: [:show]
  end

end
