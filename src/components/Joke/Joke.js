import {useState} from "react";
import JokeButton from "./JokeButton";
import JokeComponent from "./JokeComponent";

function Joke(){
    const [showJoke,setShowJoke] = useState(false);
    return (
        <div style={{marginTop:'200px'}}>
            {showJoke?
            <JokeComponent />:
            <JokeButton setShowJoke={setShowJoke}/>
            }
        </div>
    )
}

export default Joke;