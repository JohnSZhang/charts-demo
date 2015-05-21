window.BackboneRouter = Backbone.Router.extend({
    routes: {
        '' : 'main'
    },

    main: function () {
        var seriesModel = new TimeSeriesModel();
        window.view = new window.DemoView({
            model: seriesModel,
            el: '#wrapper'
        });
        view.render();
    }
});