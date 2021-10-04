import { randomUUID } from "crypto";

export default function(request, response, next) {
    const UUID = randomUUID();
    request.uuid = UUID;
    next();
}