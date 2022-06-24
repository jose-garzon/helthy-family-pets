import { QueryCache, QueryClient } from "react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const err = error as Error;
      console.error(err.message); //TODO: INCLUDE THE ERROR STATUS
    },
  }),
});

export { queryClient };
