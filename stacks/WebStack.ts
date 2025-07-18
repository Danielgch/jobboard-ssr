import * as dotenv from "dotenv";
import { StackContext, RemixSite, Function, Api } from "sst/constructs";

dotenv.config();

export function WebStack({ stack }: StackContext) {
  const functions = {
    contact: new Function(stack, "ContactFunction", {
      handler: "functions/contact.handler"
    }),
    postMessage: new Function(stack, "PostMessageFunction", {
      handler: "functions/post-message.handler"
    })
  };

  Object.values(functions).forEach((fn) => {
    fn.addEnvironment("DATABASE_URL", process.env.DATABASE_URL!);
  });

  const site = new RemixSite(stack, "RemixApp", {
    path: ".",
    buildCommand: "npm run build",
    environment: {
      NODE_ENV: "production"
    }
  });

  const api = new Api(stack, "Api", {
    routes: {
      "GET /contact": functions.contact,
      "POST /messages": functions.postMessage
    }
  });

  stack.addOutputs({
    URL: api.url,
    RemixAppURL: site.url
  });
}
