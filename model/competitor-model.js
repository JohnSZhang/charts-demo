window.CompetitorModel = Backbone.Model.extend({
    initialize: function () {
        this.createData(4);
    },

    createData: function (num) {
        var data = [];
        for (var i = 0; i < num; i++) {
            data.push({ x:i, y:Math.floor(100 / num) });
        }
        this.set('data', data);
        this.set('competitor', 100);
    },

    getStepData: function () {
        return this.get('data');
    }
});