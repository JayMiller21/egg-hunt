User.create(name: "Jenn", password: "password", introduction: "Hi, I'm Jenn!")
User.first.games.create(score: 5)

User.create(name: "Alex", password: "password", introduction: "Hi, I'm Alex!")
User.first.games.create(score: 8)
