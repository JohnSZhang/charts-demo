window.BubbleChartView = Backbone.View.extend({
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
                el: '.scatter-export',
                xAxis: {
                    title: 'Value',
                    min: 0,
                    max: 200
                },
                yAxis: {
                    title: 'Value',
                    min: 0,
                    max: 200
                },
                scatter: {
                    radius: function(d) { return (d.z); },
                    dataKey: 'id'
                },
                chart: {
                    height: 400,
                    width: 600
                }
            })
            .cartesian()
            .scatter()
            .tooltip();
    }
});
