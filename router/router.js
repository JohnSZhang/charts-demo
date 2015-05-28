window.BackboneRouter = Backbone.Router.extend({
    routes: {
        '' : 'main',
        'pie': 'pie'
    },

    main: function () {
        var seriesModel = new TimeSeriesModel();
        window.view = new window.ChartContainerView({
            model: seriesModel,
            el: '#wrapper'
        });
        var bubbleChartView = new BubbleChartView();
        var barChartViewOne = window.barChartView = new BarChartView();
        barChartViewOne.setFilterAttribute('x');
        view.addChartView(bubbleChartView);
        view.addChartView(barChartViewOne);
        view.render();
    },

    pie: function () {
        var pieModel = new PieModel();
        window.view = new window.ChartContainerView({
            model: pieModel,
            el: '#pie-wrapper'
        });
        var pieChartView = new PieChartView();
        view.addChartView(pieChartView);
        view.render();
    }
});