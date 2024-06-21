import { mutation, query} from './_generated/server'
import { v } from 'convex/values'

export const getTasks = query({
    args: {},
    handler: async (ctx, args) => {

       const tasks = await ctx.db.query("tasks").collect()
       return tasks
    }
})

export const addTask = mutation({
    args: {
        text: v.string()
    },
    handler: async (ctx,args) => {
       const taskId =  await ctx.db.insert("tasks",
            {
                text: args.text,
                completed: false
            })

            return taskId
    },
})


export const completedTask = mutation({
    args: {
        id: v.id("tasks"),
    },
    handler: async (ctx, args) => {

       await ctx.db.patch(args.id, {completed: true});
    },
})

export const deleteTasks = mutation({
    args: {
        id: v.id("tasks")
    },
    handler: async (ctx, args) => {

       await ctx.db.delete(args.id);
       
    }
})