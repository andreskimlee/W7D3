Rails.application.routes.draw do
  namespace :api, defaults: { format: "json" } do 
    resources :gifts, only: [:show]
    resources :guests do   
      resources :gifts, only: [:index] 
  end 
  
end 
end 

