export class Config {
    public static queryServer = {
        host: "192.168.1.14",
        port: 19990
    };
    public static authServer = {
        host: "192.168.1.14",
        port: 19992
    };
    public static gameServer = {
        host: "192.168.1.14",
        port: 19800
    };

    public static getUrl(server: any): string {
        return `${server.host}:${server.port}`;
    }
}
