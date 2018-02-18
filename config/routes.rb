Rails.application.routes.draw do
  resources :tasks
  get '/types', to: 'types#index', as: 'types'
  get '/types/:id', to: 'types#show', as: 'type'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
