import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("registeredVehicles").collect();
  },
});

export const createRegisteredVehicle = mutation({
  args: {
    plate: v.string(),
  },
  handler: async (ctx, { plate }) => {
    await ctx.db.insert("registeredVehicles", { plate });
  },
});
