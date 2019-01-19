// @ts-ignore
if (!String.format) {
    // @ts-ignore
    String.prototype.format = function () {
        var args = arguments;
        var nLength = args.length;
        if (nLength == 0) {
            return this;
        }

        var strResult = this;
        for (var i = 0; i < nLength; i++) {
            var tmp = args[i];
            if (tmp !== null && tmp !== undefined) {
                strResult = strResult.replace('{' + i + '}', tmp.toString());
            }

        }
        return strResult;
    }
}

interface String {
    format(...args): string
}
