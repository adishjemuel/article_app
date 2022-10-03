class ApplicationController < ActionController::Base
  protect_from_forgery

  before_action :configure_permitted_parameters, if: :devise_controller? 

  before_action :check_current_user

  protected 
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      user_params.permit(:username, :first_name, :last_name, :email, :password)
    end

    devise_parameter_sanitizer.permit(:account_update) do |account_update_params| 
      account_update_params.permit(:username, :first_name, :last_name, :email, :password, :password_confirmation, :current_password) 
    end
  end

  def check_current_user
    @current_user||=current_user 
  end  


  def same_user?(user)
    current_user == user 
  end

end
