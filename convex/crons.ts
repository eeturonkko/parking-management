import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.hourly(
  "Remove expired vehicles",
  { minuteUTC: 0 },
  internal.registeredVehicles.removeExpiredVehicles
);

export default crons;
