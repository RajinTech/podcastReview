user_list = [
  [ "germany@gmail.com", "germany", "germany" ],
  [ "france@gmail.com", "france", "france" ],
  [ "belgium@gmail.com", "belgium", "belgium" ],
  [ "netherlands@gmail.com", "netherlands", "netherlands" ]
]

user_list.each do |email, password, password_confirmation|
  User.create( email: email, password: password, password_confirmation: password_confirmation )
end

podcast_list = [
  [ "Evil Propoganda Machine", "take over the world", "google.com" ],
  [ "Hardcore History", "History revisited", "https://www.dancarlin.com/hardcore-history-series/" ],
  [ "Belgium", "Mas Chocolate", 10 ],
  [ "Netherlands", "Heuge Papa", 68 ]
]

podcast_list.each do |title, description, url|
  Podcast.create( title: title, description: description, url: url )
end

review_list = [
  [ 1, "my ears hurt", 2, 3, 4, 1, 1 ],
  [ 2, "bad", 2, 3, 4, 2, 1 ],
  [ 3, "blows", 2, 3, 4, 3, 1 ],
  [ 4, "good", 2, 3, 4, 4, 1 ],
  [ 5, "bad", 2, 3, 4, 5, 1 ],
  [ 1, "good", 2, 3, 4, 6, 1 ],
  [ 2, "lousey", 2, 3, 4, 7, 1 ],
  [ 3, "bad", 2, 3, 4, 8, 1 ],
  [ 4, "good", 2, 3, 4, 9, 1 ],
  [ 5, "I think im dumber as a result", 2, 3, 4, 10, 1 ],
  [ 1, "bad", 2, 3, 4, 11, 1 ],
  [ 2, "good", 5, 4, 4, 12, 1 ],
  [ 3, "blows", 2, 3, 4, 13, 1 ],
  [ 4, "bad", 2, 3, 4, 14, 1 ],
  [ 5, "good", 5, 5, 4, 1, 2 ],
  [ 1, "lousey", 2, 3, 4, 2, 2 ],
  [ 2, "would rather listen to nails on a chalk board", 2, 1, 4, 3, 2 ],
  [ 3, "blows", 2, 3, 4, 4, 2 ],
  [ 4, "good", 2, 2, 4, 5, 2 ],
  [ 5, "sounds like teen spirit", 2, 3, 4, 6, 2 ],
  [ 1, "good", 5, 3, 4, 7, 2 ],
  [ 2, "lousey", 2, 3, 4, 8, 2 ],
  [ 3, "wonderful", 2, 3, 1, 9, 2 ],
  [ 4, "good", 4, 3, 4, 10, 2 ],
  [ 5, "blows", 2, 3, 4, 11, 2 ],
  [ 1, "bad", 2, 3, 4, 12, 2 ],
  [ 2, "boring", 3, 4, 4, 13, 2 ],
  [ 3, "lousey", 2, 3, 1, 14, 2 ],
  [ 4, "bad", 2, 3, 4, 1, 3 ],
  [ 5, "handles like a dream", 5, 5, 4, 2, 3 ],
  [ 1, "blows", 2, 3, 4, 3, 3 ],
  [ 2, "bad", 2, 3, 4, 4, 3 ],
  [ 3, "good", 5, 2, 4, 5, 3 ],
  [ 4, "lousey", 2, 3, 1, 6, 3 ],
  [ 5, "bad", 2, 3, 4, 7, 3 ],
  [ 1, "good", 5, 2, 4, 8, 3 ],
  [ 2, "blows", 2, 3, 4, 9, 3 ],
  [ 3, "bad", 2, 3, 4, 10, 3 ],
  [ 4, "good", 4, 1, 1, 11, 3 ],
  [ 5, "straight garbage", 3, 3, 4, 12, 3 ],
  [ 1, "bad", 2, 3, 4, 13, 3 ],
  [ 2, "good", 3, 1, 4, 14, 3 ],
  [ 3, "blows", 2, 1, 4, 1, 4 ],
  [ 4, "bad", 2, 3, 4, 2, 4 ],
  [ 5, "good", 3, 2, 4, 3, 4 ],
  [ 1, "lousey", 2, 3, 4, 4, 4 ],
  [ 2, "lame", 3, 3, 4, 5, 4 ],
  [ 3, "good", 2, 4, 4, 6, 4 ],
  [ 4, "the best", 2, 1, 4, 7, 4 ],
  [ 5, "bad", 3, 3, 4, 8, 4 ],
  [ 1, "good", 2, 5, 4, 9, 4 ],
  [ 2, "blows", 2, 3, 4, 10, 4 ],
  [ 3, "bad", 3, 3, 4, 11, 4 ],
  [ 4, "good", 2, 5, 4, 12, 4 ],
  [ 5, "lousey", 2, 3, 4, 13, 4 ],
  [ 1, "bad", 3, 1, 4, 14, 4 ]
]
review_list.each do |rating, comment, binge_val, educational_val, entertainment_val, podcast_id, user_id|
  Review.create( rating: rating, comment: comment, binge_val: binge_val, educational_val: educational_val, entertainment_val: entertainment_val, podcast_id: podcast_id, user_id: user_id )
end

creator_list = [
   "James Franco",
   "Paul Bunyon",
   "Nader Mohktar",
   "Riley Cyrus",
   "Gabi Dabi",
   "Bill Clinton",
   "Dan Carlin",
   "Malcom Gladwell",
   "Fishy McFisherton"
]
creator_list.each do |name|
  Creator.create( name: name)
end

podcast_creatorship_list = [
  [ 1, 5],
  [ 2, 4],
  [ 3, 3],
  [ 4, 2],
  [ 5, 1],
  [ 6, 9],
  [ 7, 8],
  [ 8, 7],
  [ 9, 6],
  [ 10, 5],
  [ 11, 4],
  [ 12, 3],
  [ 13, 2],
  [ 14, 1],
  [ 1, 2],
  [ 2, 3],
  [ 3, 4],
  [ 4, 5],
  [ 5, 6],
  [ 6, 7],
  [ 7, 9]
 ]
podcast_creatorship_list.each do |podcast_id, creator_id|
  PodcastCreatorship.create( podcast_id: podcast_id, creator_id: creator_id)
end
