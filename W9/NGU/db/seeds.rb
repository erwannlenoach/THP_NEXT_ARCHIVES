#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'




10.times do
  Article.create(
    title: Faker::Science.element,
    content: Faker::TvShows::RickAndMorty.quote,
    user_id: 1
  )
end

guts = User.create(email: "guts@berserk.com", password: "berserk")
guts.avatar.attach(
  io: File.open('./public/avatars/guts-berserk.png'),
  filename: "guts-berserk.png",
  content_type: 'application/png'
)


