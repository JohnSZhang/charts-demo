window.app = {
    initialize: function () {
        this.router = new window.BackboneRouter();
        Backbone.history.start();
    }
};

window.app.initialize();