Rails.application.routes.draw do

  devise_for :users

  root to: 'application#dashboard', as: 'dashboard'

  get '/book.md', to: 'book#md', as: 'export_md'
  get '/book.pdf', to: 'book#pdf', as: 'export_pdf'
  get '/book.epub', to: 'book#epub', as: 'export_epub'
  get '/book.html', to: 'book#html', as: 'export_html'

  resources :parts
  resources :chapters
  resources :segments

end
