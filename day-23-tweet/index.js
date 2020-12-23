const sendBtn = document.querySelector('#send_btn')
const counter = document.querySelector('#counter_tweet')
const typedTweet = document.querySelector('#typed_tweet')
const maxTweetLength = 140

const checkTweetLength = function (e) {
  const tweetLength = typedTweet.value.length

  counter.innerHTML = tweetLength
  //   console.log(tweetLength, maxTweetLength) // for testing

  if (tweetLength > 0 && tweetLength < maxTweetLength) {
    sendBtn.classList.remove('button--disabled')
  }
  if (tweetLength > maxTweetLength) {
    sendBtn.classList.add('button--disabled')
    counter.classList.add('counter--exceeded')
  }
  if (tweetLength === maxTweetLength) {
    sendBtn.classList.remove('button--disabled')
    counter.classList.remove('counter--exceeded')
  }
  if (!tweetLength) {
    counter.classList.remove('counter--exceeded')
  }
}

typedTweet.addEventListener('keyup', checkTweetLength)

checkTweetLength()

// test text
// 144 characters
// Doggo ipsum shoober dat tungg tho boofers very jealous pupper the neighborhood pupper lotsa pats heck the neighborhood pupper, shibe heckin good

/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
