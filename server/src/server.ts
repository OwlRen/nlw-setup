import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors"

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

app.get("/", async() => {
   const habits = await prisma.habits.findMany()
   return habits;
});

app.listen({
   port: 6969,
}).then(() => {
   console.log("Http Server Running!");
});
