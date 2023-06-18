import PropTypes from 'prop-types';
import Chart from "./Chart";
import useChart from "../hooks/useChart";

const currencyFormatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
});

function ChartLine({ items, name }) {
    const { data, categories } = items.reduce((acc, item) => {
        acc.data.push(item.value);
        acc.categories.push(item.date);
        return acc;
    }, {
        data: [],
        categories: [],
    });

    const chartOptions = useChart({
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        grid: {
            show: true,
        },
        yaxis: {
            labels: {
                show: true,
                formatter: (value) => currencyFormatter.format(value),
            },
        },
        xaxis: {
            categories,
            type: "datetime",
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    yaxis: {
                        labels: {
                            show: false,
                        }
                    }
                }
            }
        ]
    });

    return (
        <div className="chart-line">
            <Chart type="line" series={[{ data, name }]} options={chartOptions} height="100%" />
        </div>
    );
}

export default ChartLine;

ChartLine.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number,
        value_formatted: PropTypes.string,
    })).isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
};