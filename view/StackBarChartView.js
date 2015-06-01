window.StackBarChartView = Backbone.View.extend({

    render: function (data) {
        if (!this.chart) {
            this.initChart();
        }
        if (data) {
            var bars = [];
            _.each(data, function (piece) {
                bars.push([piece]);
            });
            this.renderChart(bars);
        }
    },

    renderChart: function (data) {
        this.chart.setData(data);
        this.chart.render();
    },


    initChart: function () {
        this.chart = new Contour({
            el: '#stack-bar',
            chart: {
                height: 250
            },
            legend: {
                hAlign: 'center',
                vAlign: 'bottom',
                direction: 'horizontal'
            },
            bar: {
                stacked: true
            }
        })
        .cartesian()
        .horizontal()
        .bar()
        .tooltip();
    }
});
