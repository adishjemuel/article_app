class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :edit, :update, :destroy] 
    
    before_action :authenticate_user!, only: [:update, :destroy, :create] 
    PAGINATE_PER_PAGE = 5;

    def index   
      test_article = Article.find(16)
      @q = Article.ransack(params[:q]) 
      @articles = @q.result.includes(:user).page(params[:page]).per(PAGINATE_PER_PAGE) 
      @users = []  
      @articles.each do |article| 
         @users << article.user
      end
    end

    def new 
    end 

    def edit 
      if current_user != @article.user 
        redirect_to '/'
      end
    end
    
    def show 
    end
    
    def create  
      @article = current_user.articles.new(article_params)
      if @article.save 
        redirect_to @article 
      else 
        render :new, status: :unprocessable_entity 
      end 
    end 
  
    def update 
      if @article.user == current_user && @article.update(article_params)
        redirect_to @article 
      else 
        render :edit, status: :unprocessable_entity
      end
    end
  
    def destroy 
      @article.destroy 
      redirect_to root_path, status: :see_other 
    end 

  
  
    private 
  
    def article_params 
      params.require(:article).permit(:title, :highlight, :body) 
    end
  
    def set_article 
      @article = Article.find(params[:id]) 
    end 
  end
  