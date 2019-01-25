Rails.application.routes.draw do
  devise_for :users

  root 'podcasts#index'

  resources :podcasts, only: [:index, :show]

  namespace 'api' do
    namespace 'v1' do
      resources :podcasts, only: [:index, :show]
    end
  end

end
