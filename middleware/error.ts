import {Context, Next} from "koa"

export const error = async (ctx: Context, next: Next) => {
    try {
        await next()
    } catch (err: any) {
        ctx.status = err.status || 500
        ctx.body = err.message
        ctx.app.emit("error", err, ctx)
    }
}
