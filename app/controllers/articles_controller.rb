class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy] 

    before_action :set_user
    PAGINATE_PER_PAGE = 5;

    def index   
      @q = Article.ransack(params[:q]) 
      @articles = @q.result.includes(:user).page(params[:page]).per(PAGINATE_PER_PAGE) 
      @users = []  
      @articles.each do |article| 
         @users << article.user
      end
    end
    
    def show 
    end
    
    def create 
      @article = Article.new(article_params) 
  
      if @article.save 
        redirect_to @article 
      else 
        render :new, status: :unprocessable_entity 
      end 
    end 
  
    def update 
      if @article.update(article_params)
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
      params.require(:article).permit(:title, :body, :status) 
    end
  
    def set_article 
      @article = Article.find(params[:id]) 
    end 

    def set_user 
      @current_user = current_user
    end 
   
  end
  