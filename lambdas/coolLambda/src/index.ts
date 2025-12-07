import * as Sentry from "@sentry/node";
import { AWSLambda } from "@sentry/serverless";

import { sentryLambdaInit } from "@rivial-data-security/sentry-utils";

import { fileScanRouter } from "./fileScanRouter.js";

import type { FileScanRouterResponse, GuardDutyScanEvent } from "./fileScanRouter.js";
import type { NodeOptions } from "@sentry/node";
import type { EventBridgeEvent } from "aws-lambda";

Sentry.init({
  ...(sentryLambdaInit as NodeOptions),
});

export const handler = AWSLambda.wrapHandler(
  async (
    event: EventBridgeEvent<"GuardDuty Malware Protection Object Scan Result", GuardDutyScanEvent>,
  ): Promise<FileScanRouterResponse> => {
    return fileScanRouter(event);
  },
  { timeoutWarningLimit: 5000 },
);
