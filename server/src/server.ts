import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors)
app.register(appRoutes)


app.listen({
   port: 6969,
}).then(() => {
   console.log("Http Server Running!");
});
