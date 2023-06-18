import PropTypes from 'prop-types';
import items from "../data/items.json";
import ChartLine from './CharLine';

const CHART_LINE_MODULE = '4';

export default function Module({ id }) {
    return (
        <div className="module">
            {id === CHART_LINE_MODULE && <ChartLine items={items} name="Balances" />}
            {id !== CHART_LINE_MODULE && <div>{id}</div>}
        </div>
    );
}

Module.propTypes = {
    id: PropTypes.string.isRequired,
};