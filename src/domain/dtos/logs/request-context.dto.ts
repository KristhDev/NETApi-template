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

    /**
     * Creates a request context from a request.
     *
     * @param {Request} req - The request.
     * @returns {RequestContextDto} The request context.
     */
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

    /**
     * Converts the request context to a JSON object.
     *
     * @returns {object} The request context as a JSON object.
     */
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