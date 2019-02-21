user_list = [
  [ "johndoe@gmail.com", "tested", "tested" ],
  [ "janedoe@gmail.com", "tested", "tested" ],
  [ "johnsmith@gmail.com", "tested", "tested" ],
  [ "janesmith@gmail.com", "tested", "tested" ]
]
user_list.each do |email, password, password_confirmation|
  User.create( email: email, password: password, password_confirmation: password_confirmation )
end

podcast_list = [
  [ "JavaScript Jabber", "Devchat.tv has a mission to empower programmers to change the world by helping them better understand the technologies, tools, processes, and possibilities of their craft.", "https://devchat.tv/js-jabber/" ],
  [ "Hardcore History", "History revisited", "https://www.dancarlin.com/hardcore-history-series/" ],
  [ "The Mission Daily by The Mission", "The Mission Daily is a podcast dedicated to accelerated learning and helping you become healthier, wealthier, and wiser.", "mission.org" ],
  [ "The Story by The Mission", "In The Mission’s podcast, The Story, you’ll discover the unknown backstories of trailblazers who changed the world!", "mission.org" ],
  [ "Tori Talk w/ Catori Langley Podcast", "I am Washingtonian through and through. I love my city and want to share with all of you exactly why that is.", "https://toritalkwebseries.com/tori-talk-web-show/" ],
  [ "The RE-Cast", "The Reboot, Revival, Rehash Cast (often shortened to the RE-Cast) is a weekly entertainment podcast hosted by PIEGUYRULZ and MonstersReview.", "http://www.digitalpodcast.com/feeds/go?feed_id=92014" ],
  [ "Kondo Comrades", "A podcast about the Life Changing Magic of Tidying Up!", "https://soundcloud.com/user-56605011" ],
  [ "Decipher Security Podcast", "The editors of Decipher talk with a rotating cast of security practitioners, researchers, and executives about a variety of topics in the security and privacy fields.", "https://duo.com/decipher/" ],
  [ "Modern Figures Podcast", "The Institute for African-American Mentoring in Computing Sciences (iAAMCS)", "http://modernfigurespodcast.com/" ],
  [ "Hinkle Heat Check", "Dive into all things Butler basketball with Lukas Harkins (BustingBrackets.com) and Jared Grubbs (ButlerHoops.com).", "https://hinkleheatcheck.podbean.com/" ],
  [ "PWTorch Dailycast", "PWTorch Dailycast features a line-up of seven weekly shows, with a new episode on each day of the week with a different focus. ", "https://www.spreaker.com/show/pwtorch" ],
  [ "The Naked Truth with Nicole Dei", "Join Nicole Dei for her bi-weekly podcast covering all things body positivity.", "https://anchor.fm/nicole-dei" ],
  [ "Nouf Hakeem", " Self-recovery • homemaking • lifestyle • humanism • storytelling ", "https://noufhakeem.com/" ],
  [ "MadHatterCast", "Matt and Dave heckle about theological errors relating to conspiracy and supernatural topics with a whole lot of gold in between.", "https://anchor.fm/madhattercast" ]
]
podcast_list.each do |title, description, url|
  Podcast.create( title: title, description: description, url: url )
end
review_list = [
  [ 1, "Wasn't for me.", 2, 3, 4, 1, 1 ],
  [ 2, "Didn't love it.", 2, 3, 4, 2, 1 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 4, 3, 1 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 3, 4, 4, 1 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 2, 3, 4, 5, 1 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 6, 1 ],
  [ 2, "Didn't love it.", 2, 3, 4, 7, 1 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 4, 8, 1 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 3, 4, 9, 1 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 2, 3, 4, 10, 1 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 11, 1 ],
  [ 2, "Didn't love it.", 5, 4, 4, 12, 1 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 4, 13, 1 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 3, 4, 14, 1 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 5, 5, 4, 1, 2 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 2, 2 ],
  [ 2, "Didn't love it.", 2, 1, 4, 3, 2 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 4, 4, 2 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 2, 4, 5, 2 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 2, 3, 4, 6, 2 ],
  [ 1, "Wasn't for me.", 5, 3, 4, 7, 2 ],
  [ 2, "Didn't love it.", 2, 3, 4, 8, 2 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 1, 9, 2 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 4, 3, 4, 10, 2 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 2, 3, 4, 11, 2 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 12, 2 ],
  [ 2, "Didn't love it.", 3, 4, 4, 13, 2 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 1, 14, 2 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 3, 4, 1, 3 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 5, 5, 4, 2, 3 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 3, 3 ],
  [ 2, "Didn't love it.", 2, 3, 4, 4, 3 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 5, 2, 4, 5, 3 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 3, 1, 6, 3 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 2, 3, 4, 7, 3 ],
  [ 1, "Wasn't for me.", 5, 2, 4, 8, 3 ],
  [ 2, "Didn't love it.", 2, 3, 4, 9, 3 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 3, 4, 10, 3 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 4, 1, 1, 11, 3 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 3, 3, 4, 12, 3 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 13, 3 ],
  [ 2, "Didn't love it.", 3, 1, 4, 14, 3 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 1, 4, 1, 4 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 3, 4, 2, 4 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 3, 2, 4, 3, 4 ],
  [ 1, "Wasn't for me.", 2, 3, 4, 4, 4 ],
  [ 2, "Didn't love it.", 3, 3, 4, 5, 4 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 2, 4, 4, 6, 4 ],
  [ 4, "tReally good podcast -- wish they would release more episodes.", 2, 1, 4, 7, 4 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 3, 3, 4, 8, 4 ],
  [ 1, "Wasn't for me.", 2, 5, 4, 9, 4 ],
  [ 2, "Didn't love it.", 2, 3, 4, 10, 4 ],
  [ 3, "Not bad, but I think there are better podcasts in this genre. Worth a listen.", 3, 3, 4, 11, 4 ],
  [ 4, "Really good podcast -- wish they would release more episodes.", 2, 5, 4, 12, 4 ],
  [ 5, "Love this podcast! Have been listening every day for a few months. Highly recommend you get into it!", 2, 3, 4, 13, 4 ],
  [ 1, "Was not a fan.", 3, 1, 4, 14, 4 ]
]
review_list.each do |rating, comment, binge_val, educational_val, entertainment_val, podcast_id, user_id|
  Review.create!( rating: rating, comment: comment, binge_val: binge_val, educational_val: educational_val, entertainment_val: entertainment_val, podcast_id: podcast_id, user_id: user_id )
end

creators = [
  "Joe Eames",
  "Dan Carlin",
  "The Mission",
  "The Mission",
  "Catori Langley",
  "PIEGUYRULZ",
  "Marie Kondo",
  "Dennis Fisher",
  "Dr. Jeremy Waisome",
  "Lukas Harkins",
  "PWTorch",
  "Nicole Dei",
  "Nouf Hakeem",
  "Matt and Dave"
]

creators.each do |name|
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

 (podcasts_list.length - 1).times do |i|
   PodcastCreatorship.create( podcast_id: i, creator_id: i)
 end

vote_list = [
  [ 1, 1, 1],
  [ 1, 2, 1],
  [ 1, 3, 1],
  [ 1, 4, 1],
  [ 0, 2, 2],
  [ -1, 3, 3],
  [ 1, 4, 4],
  [ 1, 1, 5],
  [ 0, 2, 6],
  [ -1, 3, 7],
  [ 1, 4, 8],
  [ 1, 1, 9],
  [ 0, 2, 10],
  [ -1, 3, 11],
  [ 1, 4, 12],
  [ 1, 1, 13],
  [ 0, 2, 14],
  [ -1, 3, 15],
  [ 1, 4, 16],
  [ 1, 1, 17],
  [ 0, 2, 18],
  [ -1, 3, 19],
  [ 1, 4, 20],
  [ 1, 1, 21],
  [ 0, 2, 22],
  [ -1, 3, 23],
  [ 1, 4, 24],
  [ 1, 1, 25],
  [ 0, 2, 26],
  [ -1, 3, 27],
  [ 1, 4, 28],
  [ 1, 1, 29],
  [ 0, 2, 30],
  [ -1, 3, 31],
  [ 1, 4, 32],
  [ 1, 1, 33],
  [ 0, 2, 34],
  [ -1, 3, 35],
  [ 1, 4, 36],
  [ 1, 1, 37],
  [ 0, 2, 38],
  [ -1, 3, 39],
  [ 1, 4, 40],
  [ 1, 1, 41],
  [ 0, 2, 42],
  [ -1, 3, 43],
  [ 1, 4, 44],
  [ 1, 1, 45],
  [ 0, 2, 46],
  [ -1, 3, 47],
  [ 1, 4, 48],
  [ 1, 1, 49],
  [ 0, 2, 50],
  [ -1, 3, 51],
  [ 1, 4, 52],
  [ 1, 1, 53],
  [ 0, 2, 54],
  [ -1, 3, 55],
  [ 1, 4, 56]
]
vote_list.each do |value, user_id, review_id|
  Vote.create( value: value, user_id: user_id, review_id: review_id)
end
