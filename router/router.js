window.BackboneRouter = Backbone.Router.extend({
    routes: {
        'bubble' : 'bubble',
        'pie' : 'pie'
    },

    bubble: function () {
        var seriesModel = new TimeSeriesModel();
        var view = window.view = new window.ChartContainerView({
            model: seriesModel,
            el: '#wrapper',
        });
        view.template = window.templates.bubbles;
        var bubbleChartView = new BubbleChartView();
        var barChartViewOne = window.barChartView = new BarChartView();
        barChartViewOne.setFilterAttribute('x');
        view.render();
        view.addChartView(bubbleChartView);
        view.addChartView(barChartViewOne);
    },
    pie: function () {
        var seriesModel = new CompetitorModel();
        var view = window.view = new window.ChartContainerView({
            model: seriesModel,
            el: '#wrapper',
        });
        view.template = window.templates.pie;
        view.render();
        var pieChartView  = new PieChartView();
        view.addChartView(pieChartView);
        view.updateCharts();
    }
});