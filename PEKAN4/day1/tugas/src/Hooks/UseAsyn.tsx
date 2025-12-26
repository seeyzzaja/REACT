import { useEffect, useState } from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  deps: unknown[] = []
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));

    asyncFunction()
      .then((result) => {
        setState({
          data: result,
          loading: false,
          error: null
        });
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setState({
            data: null,
            loading: false,
            error: err.message
          });
        } else {
          setState({
            data: null,
            loading: false,
            error: "Unknown error"
          });
        }
      });
  }, deps);

  return state;
}
