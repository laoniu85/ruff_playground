'use strict';

var assert = require('assert');
var path = require('path');
var test = require('test');

var driverRunner = require('ruff-driver-runner');

var driverPath = path.join(__dirname, '..');

module.exports = {
    'test should build driver': function (done) {
        driverRunner.run(driverPath, function(error, context) {
            var inputs = context.inputs;
            var device = context.device;

            // ...

            done();
        });
    },
    'test movement': function (done) {
        driverRunner.run(driverPath, function(error, context) {
            var inputs = context.inputs;
            var device = context.device;
            var car = device;
            // ...
            car.stop();
            car.moveFront();
            car.moveBack();
            car.turnLeft();
            car.turnRight();
            done();
        });
    },
};

test.run(module.exports);
