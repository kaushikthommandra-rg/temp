class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected

  def login_required
    return true if User.find_by_id(session[:user_id])
    access_denied
    return false
  end

  def access_denied
    flash[:error] = 'Oops, you need to login before you can view the page'
    redirect_to :log_in
  end
end
