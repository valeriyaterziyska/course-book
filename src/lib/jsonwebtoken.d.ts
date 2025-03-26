const sign = (payload: string | object | Buffer, secret: string) =>
    Promise<string>;
const verify = (token: string, secret: string) => Promise<object>;

export = {
    sign,
    verify,
};
