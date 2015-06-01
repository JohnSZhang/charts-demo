window.PieModel = Backbone.Model.extend({
    initialize: function () {
        var pie = this.createPieData(4);
        this.set('data', pie);
    },

    getStepData: function (step) {
        return this.get('data');
    },

    createPieData: function () {
        var pie = [];
        _(4).times(function () {
            pie.push(Math.floor(Math.random() * 100));
        });
        return pie;
    },

    setAdditionalSection: function (value) {
        this.set('additionalValue', value);
    },

    getAllData: function () {
        return this.get('data').concat(this.get('additionalValue'));
    },

    setData: function (index, value) {
        var pie = this.get('data');
        pie[index] = value;
    },
});