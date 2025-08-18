import { Sandbox } from "@e2b/code-interpreter";
// import { openai, createAgent } from "@inngest/agent-kit";
import { Agent, createAgent, gemini } from "@inngest/agent-kit";

import { inngest } from "./client";
import { getSandbox } from "./utils";

// export const helloWorld = inngest.createFunction(
//   { id: "hello-world" },
//   { event: "test/hello.world" },
//   async ({ event }) => {
//     //imaginary transcript step
//     // await step.sleep("wait-a-moment", "5s");

//     const codeAgent = createAgent({
//       name: "code-agent",
//       system: "You are an expert next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
//       model: openai({ model: "gpt-4o" }),
//     });

//     const { output } = await codeAgent.run(
//       `Write the following snippet: ${event.data.value}`,
//     );
//     console.log(output);


//     // return { message: `Hello ${event.data.value}!` };
//     return { output };
//   },
// );

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async() => {
      const sandbox = await Sandbox.create("vybe-nextjs-vybe-dev");

      return sandbox.sandboxId;
    });

    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: gemini({
        model: "gemini-2.5-pro",
        // apiKey: process.env.GOOGLE_API_KEY, // optional if already set in env
        // baseUrl: "https://generativelanguage.googleapis.com/v1/", // default
      }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
    );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      
      return `https://${host}`;
    }); 

    // console.log(output);

    return { output, sandboxUrl };
  },
);