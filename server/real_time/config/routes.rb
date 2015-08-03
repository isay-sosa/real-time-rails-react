Rails.application.routes.draw do
  namespace :api, defalts: { format: :json } do
    namespace :v1 do
      match 'articles', to: 'articles#index', via: [:options]
      resources :articles
    end
  end
end
