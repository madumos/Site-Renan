import { useState, useEffect } from "react";
import Papa from "papaparse";

export interface CsvState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

export function useCsvData<T extends object>(
  url: string,
  validate?: (row: T) => boolean
): CsvState<T> {
  const [state, setState] = useState<CsvState<T>>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    if (!url) return;

    setState({ data: [], loading: true, error: null });

    const separator = url.includes("?") ? "&" : "?";
    const fetchUrl = `${url}${separator}_t=${Date.now()}`;

    try {
      Papa.parse<T>(fetchUrl, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (cancelled) return;

          let parsed = results.data.filter((row) =>
            Object.values(row).some((v) => String(v).trim() !== "")
          );

          if (validate) {
            parsed = parsed.filter(validate);
          }

          setState({ data: parsed, loading: false, error: null });
        },
        error: (err) => {
          if (cancelled) return;
          console.error("[useCsvData] Erro ao carregar CSV:", err.message);
          setState({
            data: [],
            loading: false,
            error: "Erro ao carregar dados. Tente novamente mais tarde.",
          });
        },
      });
    } catch (err) {
      if (!cancelled) {
        console.error("[useCsvData] Erro inesperado:", err);
        setState({
          data: [],
          loading: false,
          error: "Erro inesperado ao processar os dados.",
        });
      }
    }

    return () => {
      cancelled = true;
    };
  }, [url]);

  return state;
}