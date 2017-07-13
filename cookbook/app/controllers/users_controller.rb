class UsersController < ApplicationController
  before_action :login_required, :only => :my_account

  def new
    @user = User.new
  end

  def create
    @user = User.new(signup_params)
    if @user.save
      UserMailer.registration_confirmation(@user).deliver
      flash[:success] = "Please confirm your email address to continue"
      redirect_to root_url
    else
      flash[:error] = "Ooooppss, something went wrong!"
      render 'new'
    end
  end

  def login
  end

  def register
    @user = User.find_by_password_hash('somerandomstring')
      # @user = User.new
  end
  def update
    @user = User.find_by_password_hash('somerandomstring')
      # @user = User.new
    if @user.update(register_params)
      redirect_to log_in_url
    else
      render 'register'
    end
  end
  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
      flash[:success] = "Welcome to the Sample App! Your email has been confirmed.
      Please sign in to continue."
      redirect_to register_url
    else
      flash[:error] = "Sorry. User does not exist"
      redirect_to log_in_url
    end
  end



  def logout
    session[:user_id] = nil
    redirect_to :log_in , :notice => "Logged out!"
  end

  def process_login
    user = User.authenticate(params[:email], params[:password])
    if user
      if user.email_confirmed
        session[:user_id] = user.id
        redirect_to :my_account, :notice => "Logged in!"
      else
        flash.now[:error] = 'Please activate your account by following the instructions in the account confirmation email you received to proceed'
        render "login"
      end
    else
      flash.now.alert = 'Invalid email or password'
      render "login"
    end
  end

  def my_account
    if session[:user_id] != nil
      puts session[:user_id]
      @sessName = User.find(session[:user_id]).email
    else
      @sessName = "Guest"
    end
    @movies = Movie.all
  end

  private

  def signup_params
    params.require(:user).permit(:user_name, :email)
  end

  def register_params
    params.require(:user).permit(:password_hash, :password_salt, :password, :password_confirmation)
  end
end
