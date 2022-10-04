# frozen_string_literal: true

# Comment Methods
class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_article
  before_action :set_comment, only: %i[update destroy edit]

  def create
    @comment = @article.comments.create(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to article_path(@article)
    else
      redirect_to @articles
    end
  end

  def edit
    redirect_to @article unless same_user?(@comment.user)
  end

  def update
    redirect_to @article if same_user?(@comment.user) && @comment.update(comment_params)
  end

  def destroy
    redirect_to @article if same_user?(@comment.user) && @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_article
    @article = Article.find(params[:article_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end
end
