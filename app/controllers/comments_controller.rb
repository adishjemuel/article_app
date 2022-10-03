class CommentsController < ApplicationController
    before_action :authenticate_user!
    
    before_action :set_comment, only: [:update, :destroy, :edit]
    def create  
        @article = Article.find(params[:article_id]) 

        @comment = @article.comments.create(comment_params) 
        @comment.user_id = current_user.id 
        
        if @comment.save 
          redirect_to article_path(@article) 
        else 
          redirect_to @articles 
        end 
    end  

    def edit 
      unless same_user?(@comment.user) 
        redirect_to article_path(@article) 
      end
    end

    def update 
      if same_user?(@comment.user) && @comment.update(comment_params) 
        redirect_to article_path(@article) 
      end
    end
    def destroy 
      if @comment.user && @comment.destroy 
        redirect_to article_path(@article), status: :see_other 
      end
    end 

    private 
    def comment_params 
        params.require(:comment).permit(:body)
    end

    def set_comment
      @article = Article.find(params[:article_id])
      @comment = Comment.find(params[:id]) 
    end
end
