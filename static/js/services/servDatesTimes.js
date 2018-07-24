app.factory('servDatesTimes', function () {
    var dtstartDate;
    return {
        get: function () {
            return dtstartDate; 
        },
        set: function (paramDate) {
            dtstartDate = paramDate;
        },
        value: dtstartDate
    };
});

