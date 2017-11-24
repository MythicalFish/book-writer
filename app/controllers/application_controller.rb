class ApplicationController < ActionController::Base

  protect_from_forgery

  before_action :authenticate_user!

  def dashboard
    render 'dashboard/index'
  end

end
