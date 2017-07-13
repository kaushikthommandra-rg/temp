Rails.application.routes.draw do
  get 'users/new'
  get "log_in" => "users#login", :as => "log_in"
  get "log_out" => "users#logout", :as => "log_out"
  get "my_account" => "users#my_account", :as => "my_account"
  get 'sign_up' => "users#new", :as => 'sign_up'
  get 'register' => "users#register", :as => 'register'
  root :to => 'users#new'
  resources :users do
    member do
      get :confirm_email
    end
    post 'process_login', :on => :collection
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
