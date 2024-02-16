import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.scss'

export default function StarRating({ numOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex: number) {
        setRating(currentIndex);
    }

    function handleMouseEnter(currentIndex: number) {
        setHover(currentIndex);
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <>
            <div className="star-rating">
                {
                    [...Array(numOfStars)].map((_, index) => {
                        const _index = index + 1;

                        return <FaStar key={index}
                            className={index <= (hover) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40} />
                    })
                }
            </div>
        </>
    )
}