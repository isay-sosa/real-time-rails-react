class Api::V1::ArticlesController < ApplicationController
  def index
    articles = Article.all
    render json: articles, status: :ok
  end

  def create
    article = Article.create article_params
    return render json: article, status: :ok if article
    render json: { errors: article.errors.full_message }, status: :unprocessable_entity
  end

  private

  def article_params
    params.require(:article).permit(:content, :user)
  end
end
