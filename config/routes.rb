Rails.application.routes.draw do

  devise_for :users

  root to: 'documents#index'
  get '/:id', to: 'documents#index' # Vue takes the ID and renders the "show" view

  # To be called by vue-resourses
  resources :documents, except: [:edit] do
    resources :statements, except: [:show, :edit]
  end

end
