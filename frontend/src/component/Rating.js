import React from 'react'
import PropTypes from 'prop-types'
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            <span>
                {value >= 1 ? <IoMdStar className="star-icon" style={{ color }} /> : value >= 0.5 ? <IoMdStarHalf className="star-icon" style={{ color }} /> : <IoMdStarOutline className="star-icon" style={{ color }} />}
            </span>
            <span>
                {value >= 2 ? <IoMdStar className="star-icon" style={{ color }} /> : value >= 1.5 ? <IoMdStarHalf className="star-icon" style={{ color }} /> : <IoMdStarOutline className="star-icon" style={{ color }} />}
            </span>
            <span>
                {value >= 3 ? <IoMdStar className="star-icon" style={{ color }} /> : value >= 2.5 ? <IoMdStarHalf className="star-icon" style={{ color }} /> : <IoMdStarOutline className="star-icon" style={{ color }} />}
            </span>
            <span>
                {value >= 4 ? <IoMdStar className="star-icon" style={{ color }} /> : value >= 3.5 ? <IoMdStarHalf className="star-icon" style={{ color }} /> : <IoMdStarOutline className="star-icon" style={{ color }} />}
            </span>
            <span>
                {value >= 5 ? <IoMdStar className="star-icon" style={{ color }} /> : value >= 4.5 ? <IoMdStarHalf className="star-icon" style={{ color }} /> : <IoMdStarOutline className="star-icon" style={{ color }} />}
            </span>
            <span>
                {text && text}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.prototype = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
