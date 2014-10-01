class Game < ActiveRecord::Base
  belongs_to :player, class_name: "User"

  def player_name
    User.find(self.player_id).name
  end

  def played_at
    self.updated_at.strftime("%m/%d/%Y")
  end
end
