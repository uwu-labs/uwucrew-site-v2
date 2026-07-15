import { useEffect, useState } from "react";
import type { DerivativeType } from "../config/derivatives";

export const useDerivatives = () => {
  const [derivatives, setDerivatives] = useState<DerivativeType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/derivatives.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load derivatives (${response.status})`);
        }
        return response.json() as Promise<DerivativeType[]>;
      })
      .then((data) => {
        if (!cancelled) {
          setDerivatives(data);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { derivatives, loading, error };
};
