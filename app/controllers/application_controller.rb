class ApplicationController < ActionController::Base

  protect_from_forgery

  before_action :authenticate_admin!

  def dashboard
    render 'dashboard/index'
  end

end
