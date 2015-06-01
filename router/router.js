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
            el: '#wrapper'
        });
        var pieChartView = new PieChartView();
        var stackBarChartView = new StackBarChartView();
        view.addChartView(pieChartView);
        view.addChartView(stackBarChartView);
        view.render();
    }
});