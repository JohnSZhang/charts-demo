window.PieChartView = Backbone.View.extend({
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
        return data;
    },

    renderChart: function (data) {
        var filtered = this.filterData(data);
        this.chart.setData(filtered);
        this.chart.render();
    },

    initChart: function () {
        this.chart = new Contour({
                el: '.pie-graph',
                pie: {
                    piePadding: {
                        left: 10
                    }
                },
                legend: {
                    vAlign: 'top'
                },
                tooltip: {
                    formatter: function (d) {
                        return d.value + '%';
                    }
                },
                chart: {
                    height: 200,
                    width: 400
                }
            })
            .pie()
            .tooltip();
    }
});
