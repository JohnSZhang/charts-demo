window.BarChartView = Backbone.View.extend({
    render: function (data) {
        if (!this.chart) {
            this.initChart();
        }
        if (data) {
            this.renderChart(data);
        }
    },

    setFilterAttribute: function (attribute) {
        this.filterAttribute = attribute;
    },


    filterData: function (data) {
        var view = this;
        return _.map(data, function (pt) {
            return pt[view.filterAttribute];
        });
    },

    renderChart: function (data) {
        var filtered = this.filterData(data);
        this.chart.setData(filtered);
        this.chart.render();
    },

    initChart: function () {
        this.chart = new Contour({
                el: '.bar-graph-x',
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
                chart: {
                    height: 200,
                    width: 400
                }
            })
            .cartesian()
            .horizontal()
            .bar()
            .tooltip();
    }
});
