var PrimitiveOperator = {

    limitString: function (string, limit, delimiter) {
        var str = string;
        var position = 0;
        if (str.length > limit) {
            position = str.lastIndexOf(" ", limit);
            str = str.substring(0, position) + delimiter;
        }

        return str;
    }
};
