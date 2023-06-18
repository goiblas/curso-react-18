import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/format';

const Card = ({ name, image, types, price, onClick }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <ul className='tags-list'>
                    {types.map((type, index) => (
                        <li className='tag' key={index}>{type}</li>
                    ))}
                </ul>
            </div>
            <div className="card-actions">
                <div className='price'>{formatCurrency(price)}</div>
                <button className="button" onClick={onClick}>Add to cart</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
}

export default Card;