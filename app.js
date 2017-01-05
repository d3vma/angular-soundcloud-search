var app = angular.module("soundcloudSearch", []);

// Filter to convert milliseconds to minutes 
app.filter('durationMins', function() {
    return function (s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        return mins + ':' + secs;        
    };
});