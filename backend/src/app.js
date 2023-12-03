const Sentry = require("@sentry/node");
// const { ProfilingIntegration } = require('@sentry/profiling-node');
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
    // new ProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

connectDB();

app.use(express.json());

app.use("/api", routes);
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
