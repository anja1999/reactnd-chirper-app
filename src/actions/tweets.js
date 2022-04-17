import { saveLikeToggle, saveTweet} from "../utils/api"
import { showLoading, hideLoading } from "react-redux-loading"

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOOGLE_TWEET = 'TOOGLE_TWEET'
export const ADD_TWEET  = 'ADD_TWEET'


function addTweet(tweet){
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo){
    return (dispath, getState) =>{
        const {authedUser} = getState()

        dispath(showLoading())
        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })
        .then((tweet)=> dispath(addTweet(tweet)))
        .then(()=> dispath(hideLoading()))
    }

}
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

