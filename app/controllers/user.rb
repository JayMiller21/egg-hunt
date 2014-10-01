before "/user/:id" do
  current_user
end

get "/user/:id" do
  @user_id = params[:id].to_i
  @user = User.find(@user_id)
  @games = @user.games

  erb :"/user/show"
end
