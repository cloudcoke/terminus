import crypto, { Hash } from "crypto";

interface constructors {
    crypto: typeof crypto;
    salt: string;
}
interface values {
    [key: string]: string;
}

class JWT implements constructors {
    crypto;
    salt;
    constructor({ crypto, salt }: constructors) {
        this.crypto = crypto;
        this.salt = salt;
    }

    createToken(payload: values): string {
        const header = this.encode({ tpy: "JWT", alg: "HS256" });
        const middle = this.encode(payload);
        const signature = this.createSignature([header, middle]);

        return [header, middle, signature].join(".");
    }

    encode(value: values) {
        return Buffer.from(JSON.stringify(value)).toString("base64url");
    }

    decode(value: string) {
        return JSON.parse(Buffer.from(value, "base64url").toString("utf-8"));
    }

    createSignature(values: string[], salt: string = this.salt): string {
        const value = values.join(".");
        return this.crypto.createHmac("sha256", salt).update(value).digest("base64url");
    }

    verifyToken(token: string, salt: string = this.salt): {} {
        const [header, middle, signature] = token.split(".");
        const checksignature = this.createSignature([header, middle]);
        if (signature !== checksignature) return new Error("토큰값이 다릅니다");

        return this.decode(middle);
    }
}

export default JWT;

