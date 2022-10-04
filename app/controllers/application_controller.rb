# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  protect_from_forgery

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      user_params.permit(:username, :first_name, :last_name, :email, :password)
    end

    devise_parameter_sanitizer.permit(:account_update) do |account_update_params|
      account_update_params.permit(
        :username, :first_name, :last_name,
        :email, :password, :password_confirmation,
        :current_password
      )
    end
  end

  def same_user?(user)
    current_user == user
  end
end
