Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
