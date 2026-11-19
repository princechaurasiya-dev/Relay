import "dotenv/config";
import app from "./app.js";
import logger from "./config/logger.config.js";
import { connectDatabase } from "./config/database.config.js";

const PORT = Number(process.env.PORT) || 5000;

const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();

    const server = app.listen(PORT, () => {
      logger.info(
        { port: PORT, environment: process.env.NODE_ENV },
        "RELAY SERVER IS RUNNING SUCCESSFULLY",
      );
    });

    const shutdown = (signal: string): void => {
      logger.info({ signal }, "Graceful shutdown initiated");

      server.close((error) => {
        if (error) {
          logger.error({ err: error }, "Error while closing HTTP server");
          process.exit(1);
        }

        logger.info("HTTP server closed successfully");
        process.exit(0);
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    logger.fatal({ err: error }, "Failed to start API server");
    process.exit(1);
  }
};

void startServer();
