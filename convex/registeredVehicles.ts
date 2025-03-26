import { query, mutation, internalMutation } from "./_generated/server";
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

export const removeRegisteredVehicle = internalMutation({
  args: {
    id: v.id("registeredVehicles"),
  },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

export const removeExpiredVehicles = internalMutation({
  args: {},
  handler: async (ctx) => {
    const FOUR_HOURS_IN_MS = 4 * 60 * 60 * 1000;
    const currentTime = Date.now();
    const expirationTime = currentTime - FOUR_HOURS_IN_MS;

    const expiredVehicles = await ctx.db
      .query("registeredVehicles")
      .filter((q) => q.lt(q.field("_creationTime"), expirationTime))
      .collect();

    // Remove each expired vehicle
    for (const vehicle of expiredVehicles) {
      await ctx.db.delete(vehicle._id);
    }
  },
});
