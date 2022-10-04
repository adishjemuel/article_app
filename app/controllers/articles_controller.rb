# frozen_string_literal: true

# Articles Methods
class ArticlesController < ApplicationController
  before_action :set_article, only: %i[show edit update destroy]

  before_action :authenticate_user!, only: %i[update destroy create]

  PAGINATE_PER_PAGE = 5

  def index
    set_user_articles
    @articles = @q.result.includes(:user).page(params[:page]).per(PAGINATE_PER_PAGE)
    @flattened_articles = @articles.map { |article| [article, article.user] }
  end

  def new
    redirect_to root_path unless user_signed_in?
  end

  def edit
    redirect_to root_path unless same_user?(@article.user)
  end

  def show
    @author = @article.user
    @comments = @article.comments.map { |comment| [comment, comment.user] }
  end

  def create
    @article = current_user.articles.new(article_params)
    redirect_to @article if @article.save
  end

  def update
    if same_user?(@article.user) && @article.update(article_params)
      redirect_to @article
    else
      render :edit
    end
  end

  def destroy
    redirect_to root_path unless same_user?(@article.user)
    @article.destroy
  end

  private

  def article_params
    params.require(:article).permit(:title, :highlight, :body)
  end

  def set_article
    @article = Article.includes(:user, comments: [:user]).find(params[:id])
  end

  def set_user_articles
    if params[:user_id].present?
      @articles = Article.includes(:user).where(user_id: params[:user_id])
      @q = @articles.ransack(params[:q])
    else
      @q = Article.ransack(params[:q])
    end
  end
end
