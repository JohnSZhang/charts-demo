var __super = Backbone.View.prototype;

window.ChartContainerView = Backbone.View.extend({
    initialize: function () {
        __super.initialize.apply(this, arguments);
        this.subviews = {};
    },

    events: {
        'input #timer': 'updateChart',
        'click #play': 'playModel',
        'change #bar-one-select': 'updateBarOne',
        'input #pie-inputs': 'updatePieChartValues',
    },

    addChartView: function (view) {
        var cid = view.cid;
        this.subviews[cid] = view;
        var stepData = this.getCurrentStepData();
        view.render(stepData);
    },

    render: function () {
        _.each(this.subviews, function (view) {
            view.render();
        });
    },

    playModel: function () {
        this.playing = true;
        var view = this;
        this.currentFrame = this.getTimerValue();
        window.setTimeout(function () {
            view.playNextFrame();
        }, 500);
    },

    playNextFrame: function () {
        var view = this;
        var frame = this.getTimerValue();
        var nextFrame = frame + 1;
        this.setTimerValue(nextFrame);
        this.updateCharts(nextFrame);
        if (!this.atLastStep()) {
            window.setTimeout(function () {
                view.playNextFrame();
            }, 20);
        }
    },

    atLastStep: function () {
        return this.getStep() === this.model.getLastStep();
    },

    setTimerValue: function (value) {
        this.$('#timer')[0].value = value;
    },

    getTimerValue: function () {
        return parseInt(this.$('#timer')[0].value);
    },

    getStep: function () {
        return Math.floor(this.getTimerValue() / 100);
    },

    getCurrentStepData: function () {
        var step = this.getStep();
        return this.model.getStepData(step);
    },

    updateCharts: function (event) {
        var data = this.getCurrentStepData();
        this.renderCharts(data);
    },

    renderCharts: function (data) {
        _.each(this.subviews, function (view) {
            view.renderChart(data);
        });
    },

    updateBarOne: function (event) {
        event.preventDefault();
        var attributeToFilter = event.target.value;
        window.barChartView.setFilterAttribute(attributeToFilter);
        var data = this.getCurrentStepData();
        window.barChartView.renderChart(data);
    },

    updatePieChartValues: function () {
        var view = this;
        _.each(this.$('.pie-input'), function (el, idx) {
            view.model.setData(idx, parseInt(el.value));
        });
        this.updateCharts();
    }
});