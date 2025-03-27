import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  registeredVehicles: defineTable({
    plate: v.string(),
    expired: v.boolean(),
  }),
});
