class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save
      log_in(user)
      @user = user
      render :show
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
