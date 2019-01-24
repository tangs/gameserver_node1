export class Config {
    public static queryServer = {
        host: "127.0.0.1",
        port: 19990
    };
    public static authServer = {
        host: "127.0.0.1",
        port: 19992
    };
    public static gameServer = {
        host: "127.0.0.1",
        port: 19800
    };

    public static getUrl(server: any): string {
        return `http://${server.host}:${server.port}`;
    }
}
