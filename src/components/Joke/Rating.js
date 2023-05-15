import { useState } from 'react';

import star_unfilled from './../../assets/star_unfilled.png';
import star_filled from './../../assets/star_filled.png';


function Rating({ jokeNumber }) {
    const [userRating, setUserRating] = useState(window.localStorage.getItem(`joke${jokeNumber}Rating`) || null);
    const rating = [1, 2, 3, 4, 5];

    const handRatingUpdate = (userRated) => {
        window.localStorage.setItem(`joke${jokeNumber}Rating`, userRated);
        setUserRating(userRated);
    }



    return (
        <div>
            <div className='font-weight-lighter mb-3'>
                {
                    userRating ? 'Your Rating' : 'Rate this joke'
                }
            </div>
            <div>
                {
                    rating.map((item) => {
                        let starStatus = '';
                        if (userRating && parseInt(userRating) >= parseInt(item)) {
                            starStatus = star_filled;
                        }
                        else {
                            starStatus = star_unfilled
                        }
                        return <img className="my-icon star-icon mr-0 mr-md-1" onClick={() => handRatingUpdate(item)} src={starStatus} alt="star_image" />
                    })
                }
            </div>
        </div>

    )
}
export default Rating