import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

const startServer = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
    console.log(`server listening on http://localhost:${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
  }
};

startServer();
