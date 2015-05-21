window.TimeSeriesModel = Backbone.Model.extend({
    initialize: function () {
        var series = this.createSeries(10);
        this.updateIds(series);
        this.set('series', series);
    },

    createDataPoint: function () {
        return { x: Math.random() * 200,
            y: Math.random() * 200,
            z: Math.random() * 20
        };
    },

    updateIds: function (series) {
        _.each(series, function (step) {
            var count = 0;
            var updatePt = function (pt) {
                pt.id = count;
                count += 1;
            };
            _.each(step, function (group) {
                if (group.length) {
                    _.each(group, function (pt) {
                        updatePt(pt);
                    });
                } else {
                    updatePt(group);
                }
            });
        });
    },

    createGroup: function (num) {
        num = num || 10;
        var group = [];
        for (var i=0; i<num; i++) {
            group.push(this.createDataPoint());
        }
        return group;
    },

    createStep: function (groupNum) {
        groupNum = groupNum || 3;
        var groups = [];
        for (var i=0; i<groupNum; i++) {
            groups.push(this.createGroup(3));
        }
        return groups;
    },

    createSeries: function (stepNum) {
        var series = [];
        for (var i=0; i<stepNum; i++) {
            series.push(this.createStep(3));
        }
        return series;
    },

    getStepData: function (stepNum) {
        return this.get('series')[stepNum];
    },

    getLastStep: function () {
        return this.get('series').length - 1;
    }
});