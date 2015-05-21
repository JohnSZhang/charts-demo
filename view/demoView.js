window.DemoView = Backbone.View.extend({

    events: {
        'input #timer': 'updateChart',
        'click #play': 'playModel'
    },

    render: function (step) {
        step = step || 0;
        if (!this.chart) {
            this.initChart();
        }
        this.renderChart(this.model.getStepData(step));
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
        this.updateChart(nextFrame);
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

    updateChart: function (event) {
        var step = this.getStep();
        var data = this.model.getStepData(step);
        this.renderChart(data);
    },

    renderChart: function (data) {
        this.chart.setData(data);
        this.chart.render();
    },

    initChart: function () {
        this.chart = new Contour({
                el: '.scatter-export',
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
                scatter: {
                    radius: function(d) { return (d.z); },
                    dataKey: 'id'
                },
                chart: {
                    height: 400,
                    width: 600
                }
            })
            .cartesian()
            .scatter()
            .tooltip();
    }
});