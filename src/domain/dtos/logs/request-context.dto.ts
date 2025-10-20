import { Request } from 'express';

export class RequestContextDto {
    private constructor(
        public readonly method: string,
        public readonly path: string,
        public readonly ip?: string,
        public readonly query?: object,
        public readonly params?: object,
        public readonly headers?: object,
    ) {}

    public static fromRequest(req: Request): RequestContextDto {
        return new RequestContextDto(
            req.method,
            req.path,
            req.ip,
            req.query,
            req.params,
            req.headers
        );
    }

    public toJSON() {
        return {
            ip: this.ip,
            method: this.method,
            path: this.path,
            query: this.query,
            params: this.params,
            headers: this.headers
        }
    }
}