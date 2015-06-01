window.PieChartView = Backbone.View.extend({

    render: function (data) {
        if (!this.chart) {
            this.initChart();
        }
        if (data) {
            this.renderChart(data);
        }
    },

    renderChart: function (data) {
        this.chart.setData(data);
        this.chart.render();
    },


    initChart: function () {
        this.chart = new Contour({
            el: '#pie',
            chart: {
                height: 250
            },
            legend: {
                hAlign: 'center',
                vAlign: 'bottom',
                direction: 'horizontal'
            }
        })
        .pie()
        .tooltip();
    }
});
