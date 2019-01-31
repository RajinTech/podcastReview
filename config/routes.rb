Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'podcasts#index'

  resources :podcasts, only: [:index, :show, :new, :create] do
    resources :reviews, only: [:new, :create]
  end

  namespace 'api' do
    namespace 'v1' do
      resources :podcasts, only: [:index, :show]
      resources :reviews, only: [:index, :show, :destroy] do
        resources :votes, only: [:create]
      end
    end
  end

end
