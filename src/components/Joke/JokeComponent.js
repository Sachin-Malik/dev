import {jokesData} from './JokeData';
import Rating from './Rating';

function JokeComponent(){
    const jokeNumber = Math.floor(Math.random() * jokesData.length)+1;
    return(
        <div className='joke-container row justify-content-center'>
            <div className='col-12 col-md-6'>
                <div className='row text-center'>
                  <h5>A joke you asked, a Joke you shall recieve 🪄</h5>
                </div>

                <div className='gradient-border p-5 my-5 shadow '>

                  <div className='row '>
                   <h5>{jokesData[jokeNumber].question}</h5>
                   <h5>{jokesData[jokeNumber].answer}</h5>
                  </div>

                  <div className='row mt-1'>
                     <Rating jokeNumber={jokeNumber}/>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default JokeComponent;