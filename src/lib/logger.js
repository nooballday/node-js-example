const LOG_DIR = process.env.LOG_DIR;

export default {
    LogRequest : async function (request, _, next) {
        console.log(`[${Date()}] logging request ${request.uuid}`);
        next();
    },
} 