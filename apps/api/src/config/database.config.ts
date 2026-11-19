import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "../generated/prisma/client.js";
import logger from "./logger.config.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
  log: [
    { emit: "event", level: "error" },
    { emit: "event", level: "warn" },
  ],
});

prisma.$on("error", (event: Prisma.LogEvent) => {
  logger.error({ event }, "Prisma database error");
});

prisma.$on("warn", (event: Prisma.LogEvent) => {
  logger.warn({ event }, "Prisma database warning");
});

export const connectDatabase = async (): Promise<void> => {
  try {
    await prisma.$connect();

    await prisma.$queryRaw`SELECT 1`;

    logger.info("DB CONNECTED");
  } catch (error) {
    logger.error({ err: error }, "PostgreSQL connection failed");
    throw error;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  await prisma.$disconnect();
  logger.info("PostgreSQL database disconnected");
};

export default prisma;
