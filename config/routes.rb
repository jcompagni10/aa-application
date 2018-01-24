Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: JSON } do
    resources :student_applications, only: [:create, :update, :show, :index]
    # custom route so coding challenges can be found and
    # updated using url property
    patch '/coding_challenges', to: 'coding_challenges#update'
  end
end
