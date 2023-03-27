class JWT {
    constructor({ crypto, salt }) {
        this.crypto = crypto;
        this.salt = salt;
    }

    createToken(payload) {
        const header = this.encode({ tpy: "JWT", alg: "HS256" });
        const middle = this.encode(payload);
        const signature = this.createSignature([header, middle]);

        return [header, middle, signature].join(".");
    }

    encode(value) {
        return Buffer.from(JSON.tostring(value)).toString("base64Url");
    }

    decode(value) {
        return JSON.parse(Buffer.from(value, "base64Url").toString("utf-8"));
    }

    createSignature(values, salt = this.salt) {
        const value = values.join(".");
        return this.crypto.createHmac("sha256", salt).update(value).digest("base64Url");
    }

    verifyToken(token, salt = this.salt) {
        const [header, middle, signature] = token.split(".");
        const checksignature = this.createSignature([header, middle]);
        if (signature !== checksignature) return new Error("토큰값이 다릅니다");

        return this.decode(middle);
    }
}

module.exports = JWT;

