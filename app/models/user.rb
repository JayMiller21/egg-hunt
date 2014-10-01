class User < ActiveRecord::Base
  has_secure_password
  has_many :games, foreign_key: "player_id"
end
