import { createClient } from "redis";
import "server-only";

const globalForRedis = globalThis as unknown as {
  redis: ReturnType<typeof createClient> | undefined;
};

export const redis =
  globalForRedis.redis ??
  createClient({
    url: process.env.REDIS_URL,
  });

globalForRedis.redis ??= redis;

redis.on("error", (err) => {
  console.error("Redis Client Error", err);
});

if (!redis.isOpen) {
  await redis.connect();
}
