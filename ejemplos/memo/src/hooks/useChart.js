import merge from 'lodash-es/merge';

export default function useChart(options) {
    const baseOptions = {
        colors: [
            "#4021C8",
            "#DB50AB",
            "#5BD46C",
            "#FF813B",
            "#00D1FF",
        ],
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            animations: { enabled: false },
            foreColor: "#7F7F7F",
            fontFamily: "Roboto, sans-serif",
            defaultLocale: 'es',
            locales: [{
                "name": "es",
                "options": {
                    "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                    "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"],
                    "shortDays": ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                    "toolbar": {
                        "exportToSVG": "Download SVG",
                        "exportToPNG": "Download PNG",
                        "menu": "Menu",
                        "selection": "Selection",
                        "selectionZoom": "Selection Zoom",
                        "zoomIn": "Zoom In",
                        "zoomOut": "Zoom Out",
                        "pan": "Panning",
                        "reset": "Reset Zoom"
                    }
                }
            }],
        },
        legend: {
            show: false,
        },
        dataLabels: {
            offsetY: -28,
            style: {
                fontSize: String(14),
                colors: ["#222222"]
            }
        },
        fill: {
            opacity: 1,
            gradient: {
                type: 'vertical',
                shadeIntensity: 0,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
        grid: {
            show: false,
            borderColor: '#f5f5f6',
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
            },
            pie: {
                donut: {
                    size: '50%',
                },
            },
        },
        responsive: [
            {
                breakpoint: 400,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 2,
                        },
                    },
                },
            }
        ],
    };

    return merge(baseOptions, options);
}
