I worked on this project with Johannes Wigh.

I'd call it Fortune 500 Fun.

https://rawgit.com/mikaelkorsholm/Miniexes/master/Mini-ex8/p5/empty-example/index.html

This link sadly won't work. There is a security issue with the GIPHY API and our request, so to see our program function you will have 
to download it from here and run it yourself. 

![alt tekst](https://github.com/mikaelkorsholm/Miniexes/blob/master/Mini-ex8/p5/Screenshot.PNG?raw=true)

This program seems on the surface to simple be a worse search engine for the Giphy archives than Giphy is but it is a bit more than that. 
Whatever you write in the input box is searched on Giphy but without your knowledge the name of one of the fortune 500 companies is added
to your search. We did this by simply using the Giphy API and a JSON-file we found with all the fortune 500 companies in it. Using the 
Giphy API seemed to be pretty straight-forward, but when we were trying to get it to work with rawgit there was a security issue that 
we couldn't seem to fix. This was quite frustrating because it was hard to figure out on what end the problem was, was it with the things 
searched, the format of our search or something regarding our API key? This was quite annoying since the rest of the experience of using 
the API was quite good and really interesting. Trying to sift through the huge JSON-files that the API gave us access to was really fun, 
and I think I'm going to spend a lot more time messing around in API's. 

We included the fortune 500 companies to make a point about how search engines aren't always neutral, and how it's always the companies
with huge resources that influence these. It is a pretty obvious point but it's interesting how these "additions" to your search sometimes
can't really be spotted in the search result while it's really obvious other times. 

If I should investigate API's further I'd like to delve into the whole security issue of querys in relation to API's.

