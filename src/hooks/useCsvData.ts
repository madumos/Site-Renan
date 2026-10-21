import { useState, useEffect } from "react";
import Papa from "papaparse";

/**
 * Estado retornado pelo hook useCsvData.
 */
export interface CsvState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

/**
 * Hook genérico para buscar e parsear dados de um CSV público (Google Sheets).
 *
 * @param url   - Link CSV gerado pelo "Publicar na web" do Google Sheets.
 *                Veja src/config/csvUrls.ts para configurar os links.
 * @param validate - Função opcional para filtrar/validar cada linha parseada.
 *                   Retorne `true` para manter, `false` para descartar.
 */
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
    // Guarda referência para evitar atualizações em componente desmontado
    let cancelled = false;

    // Não faz requisição se o link ainda é placeholder
    if (!url || url.startsWith("COLE_AQUI")) {
      setState({ data: [], loading: false, error: "URL do CSV não configurada." });
      return;
    }

    setState({ data: [], loading: true, error: null });

    try {
      Papa.parse<T>(url, {
        download: true,
        header: true,         // Usa a primeira linha como chave dos objetos
        skipEmptyLines: true, // Remove linhas completamente vazias
        complete: (results) => {
          if (cancelled) return;

          // Filtra linhas malformatadas ou inválidas
          let parsed = results.data.filter((row) => {
            // Remove linhas onde todos os valores são strings vazias
            return Object.values(row).some((v) => String(v).trim() !== "");
          });

          // Aplica validação customizada, se fornecida
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
  }, [url]); // Re-executa apenas se a URL mudar

  return state;
}
