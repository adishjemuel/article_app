Rails.application.routes.draw do
  get 'homepage/index'

  root 'homepage#index'
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  
  
  resources :articles do 
    resources :comments 
  end 
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
