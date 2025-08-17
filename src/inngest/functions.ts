import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //imaginary download step
    await step.sleep("wait-a-moment", "30s");

    //imaginary transcript step
    await step.sleep("wait-a-moment", "10s");

    //imaginary summary step
    await step.sleep("wait-a-moment", "5s");

    return { message: `Hello ${event.data.email}!` };
  },
);