export class StringHelper {
    public static format(str: string, ...args): string {
        var nLength = args.length;
        if (nLength == 0) {
            return str;
        }
        var strResult = str;
        for (var i = 0; i < nLength; i++) {
            var tmp = args[i];
            if (tmp !== null && tmp !== undefined) {
                strResult = strResult.replace('{' + i + '}', tmp.toString());
            }
        }
        return strResult;
    }
}
