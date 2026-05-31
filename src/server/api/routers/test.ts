import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import z from "zod";

export const testRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ name: z.string() })).query(({ input }) => {
    return `hello ${input.name}`;
  }),
});
