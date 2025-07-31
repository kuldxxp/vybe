import {Suspense} from "react";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import { Client } from "./client";

const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "Kuldeep PREFETCH" }));

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={ <p>Loading...</p> }>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}

export default Page;