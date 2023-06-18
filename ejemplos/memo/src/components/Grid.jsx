import PropTypes from 'prop-types';

export default function Grid({children}) {
    return (
      <div className='grid'>
        {children}
      </div>
    );
}
  

Grid.propTypes = {
    children: PropTypes.node.isRequired,
}