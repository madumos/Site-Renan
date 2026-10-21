/**
 * ============================================================
 * ARQUIVO DE CONFIGURAÇÃO DOS LINKS CSV (Google Sheets)
 * ============================================================
 *
 * Como gerar o link CSV de cada aba:
 * 1. Abra sua planilha no Google Sheets.
 * 2. Vá em: Arquivo > Compartilhar > Publicar na web.
 * 3. Em "Vincular", selecione a aba desejada (ex: "Sobre").
 * 4. Em "Formato de publicação", selecione "Valores separados por vírgulas (.csv)".
 * 5. Clique em "Publicar" e copie o link gerado.
 * 6. Cole o link no campo correspondente abaixo.
 *
 * IMPORTANTE: Os links abaixo são apenas placeholders.
 * Substitua cada string pelo link CSV real da sua planilha.
 * ============================================================
 */
export const CSV_URLS = {
  /**
   * Aba "Sobre" — Coluna esperada: biography
   * Cole aqui o link CSV da aba "Sobre" da planilha.
   */
  SOBRE: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTH91Gal50tLch8IR_DhYTWKNT1tBgxuzKwf7ctxR9RUdBqdD3Q-_Y0IYOY9laJVg4U8-KGul2a5oQ/pub?gid=673983629&single=true&output=csv",
  /**
   * Aba "Portfólio" — Colunas esperadas: show (opcional), genre, album, role, year
   * Cole aqui o link CSV da aba "Portfolio" da planilha.
   */
  PORTFOLIO: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTH91Gal50tLch8IR_DhYTWKNT1tBgxuzKwf7ctxR9RUdBqdD3Q-_Y0IYOY9laJVg4U8-KGul2a5oQ/pub?gid=0&single=true&output=csv",

  /**
   * Aba "Agenda" — Colunas esperadas: date, year, title, location, time (opcional), type, link (opcional)
   * Cole aqui o link CSV da aba "Agenda" da planilha.
   */
  AGENDA: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTH91Gal50tLch8IR_DhYTWKNT1tBgxuzKwf7ctxR9RUdBqdD3Q-_Y0IYOY9laJVg4U8-KGul2a5oQ/pub?gid=1335255834&single=true&output=csv",

  /**
   * Aba "Depoimentos" — Colunas esperadas: text, author, role
   * Cole aqui o link CSV da aba "Depoimentos" da planilha.
   */
  DEPOIMENTOS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTH91Gal50tLch8IR_DhYTWKNT1tBgxuzKwf7ctxR9RUdBqdD3Q-_Y0IYOY9laJVg4U8-KGul2a5oQ/pub?gid=2021705200&single=true&output=csv",
} as const;
