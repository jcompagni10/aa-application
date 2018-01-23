Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: JSON } do
    resources :student_application, only: [:create, :update, :show]
    resources :coding_challenge, only: [:create, :show]
  end
end
