import { SSTConfig } from "sst";
import { WebStack } from "./stacks/WebStack";

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config(_input) {
    return {
      name: "jobboard-ssr",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(WebStack);
  },
} satisfies SSTConfig;