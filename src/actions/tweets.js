import { saveLikeToggle } from "../utils/api"
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOOGLE_TWEET = 'TOOGLE_TWEET'


export function receiveTweets(tweets){
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

 function toggleTweet({id, authedUser, hasLiked}){
     return{
         type: TOOGLE_TWEET,
         id, 
         authedUser, 
         hasLiked
     }
 }

 export function handleToggleTweet(info){
     return (dispath)=>{
         dispath(toggleTweet(info))

         return saveLikeToggle(info)
         .catch((e)=>{
             console.warn('Error in handleToggleTweet: ', e)
             dispath(toggleTweet(info))
             alert('There was an error liking the tweet.Try again')
         })
     }
 }

