# Renan Francioni — Site Oficial 

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Google Sheets CMS](https://img.shields.io/badge/Headless_CMS-Google_Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)](https://docs.google.com/spreadsheets)

> **Produção:** [www.renanfrancioni.com.br](https://www.renanfrancioni.com.br)  
> **Figma:** [Acessar Projeto de Design](https://www.figma.com/design/VzdlHmS9lpzYoU5WmV6SbZ/Site-Renan)

---

## Visão Geral

Site oficial e portfólio do pianista, compositor e arranjador **Renan Francioni**. O projeto é uma Single-Page Application (SPA) desenvolvida com foco em performance, design imersivo e autonomia para o cliente.

Principais pilares do projeto:
* **Navegação Temática:** Menu lateral que simula fisicamente o teclado de um piano.
* **CMS no Google Sheets:** O próprio artista atualiza agenda, depoimentos, bio e portfólio via planilha, sem precisar de acesso ao código ou novos deploys.
* **Renderização Dinâmica:** Seções sem dados na planilha somem da interface, sem quebrar o layout.

---

## Documentação e Manuais

Como parte da entrega final, foram elaborados materiais de apoio para garantir a manutenção da integridade visual e a total autonomia do cliente na gestão do conteúdo:

* [**Manual de Identidade Visual**](./docs/Renan_Francioni_-_Manual_de_Identidade_Visual.pdf): Diretrizes de UI/UX, tipografia, paleta de cores aplicados no desenvolvimento.

* [**Guia de Utilização do CMS**](./docs/Renan_Francioni_-_Guia_de_Utilizacao_do_Site.pdf): Documentação elaborada para o cliente, com o passo a passo de como gerenciar o conteúdo do site diretamente pelo Google Sheets.


## Arquitetura 

### 1. CMS via Google Sheets

Para dar autonomia ao cliente sem os custos ou a complexidade de um CMS tradicional, o banco de dados do site é o Google Sheets.

> 🔗 **[Acessar Planilha do CMS](https://docs.google.com/spreadsheets/d/1I-5iVYA52wep2jwr1x8F42tq2oiFuix-j7iF_nLpi7g/edit?usp=sharing)**

- **Estrutura e Prevenção de Erros:** Cada aba (Sobre, Portfolio, Agenda, Depoimentos) atua como uma tabela e possui **regras estritas de validação de dados** para prevenir erros de preenchimento, como formatos de hora inválidos, anos passados ou cidades com números, garantindo que os dados cheguem sempre limpos à aplicação.
- **Publicação Desacoplada:** Os dados são exportados nativamente pelo Google como CSV público.
- **`useCsvData<T>`:** Hook customizado em TypeScript que busca os dados, faz o parse com **PapaParse**, sanitiza as informações e lida com o estado de *loading* e erros.
- **Single-Fetch:** Chamadas para dados globais acontecem apenas uma vez na raiz (`App.tsx`) e são distribuídas, evitando requisições duplicadas.

```text
┌─────────────────────────────────┐
│     Google Sheets (CMS UI)      │  <── Cliente edita a planilha (com validação de dados)
└────────────────┬────────────────┘
                 │ Publica via URL CSV
                 ▼
┌─────────────────────────────────┐
│      useCsvData<T> (Hook)       │  <── Fetch, PapaParse & Sanitização
└────────────────┬────────────────┘
                 │ { data, loading, error }
                 ▼
┌────────────────┴────────────────┐
│  Componentes React (UI)         │  <── Renderização com skeletons (sem saltos visuais)
└─────────────────────────────────┘
````

### 2. Piano Navigation

- **Design:** Construído com CSS para simular o relevo das teclas pretas e brancas.
    
- **Algoritmo Musical:** As teclas pretas são geradas e posicionadas respeitando os intervalos reais de um piano.
    
- **Reatividade:** Se o hook da Agenda ou Depoimentos retornar um array vazio do Sheets, a respectiva tecla desaparece do menu.
    
    

## Seções e Fonte de Dados

|**Seção**|**O que faz**|**Fonte de Dados**|
|---|---|---|
|**Hero**|Banner principal com imagem autoral, molduras em perspectiva e tipografia editorial.|Estático|
|**Sobre**|Biografia do artista em duas colunas responsivas.|**Sheets** (`SOBRE`)|
|**Portfólio**|Trabalhos e discografia (título, gênero, papel e ano).|**Sheets** (`PORTFOLIO`)|
|**Mídia**|Galeria de embeds do YouTube e links para plataformas de streaming.|Estático / Embeds|
|**Agenda**|Lista de shows com data, local e horário. _Ocultada se vazia._|**Sheets** (`AGENDA`)|
|**Depoimentos**|Recomendações e citações sobre o artista. _Ocultada se vazia._|**Sheets** (`DEPOIMENTOS`)|
|**Contato**|Formulário de contato funcional para shows.|**Formspree** API|

## Produção e Infraestrutura

O site roda em **`www.renanfrancioni.com.br`** com as seguintes configurações:

- Redirecionamento 301 automático do domínio raiz (`renanfrancioni.com.br`) para o subdomínio `www`.
    
- Forçamento de HTTPS com certificado SSL/TLS gerado automaticamente via Edge Network.
    
- Deploy automatizado (CI/CD) conectado à branch `main` do repositório.
    

## Stack 

- **Core:** React 18 + TypeScript
    
- **Build Tool:** Vite
    
- **Estilização:** Tailwind CSS v4
    
- **Animações:** Motion (Framer Motion 12)
    
- **Data Parsing:** PapaParse
    
- **Ícones:** Lucide React
    
- **Tipografia:** Google Fonts (_Cinzel_ para títulos / _Inter_ para texto)
    

## Como Executar Localmente

**Pré-requisitos:** Node.js (v18+) e gerenciador de pacotes (npm/yarn/pnpm).

Bash

```
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/site-renan-francioni.git](https://github.com/seu-usuario/site-renan-francioni.git)
cd site-renan-francioni

# 2. Instale as dependências
npm install

# 3. Inicie o servidor local
npm run dev
```

**Personalizando os dados (Opcional):** Os endpoints do Google Sheets estão no arquivo `src/config/csvUrls.ts`. Para testar com sua própria planilha, basta substituir as URLs de publicação em CSV nesse arquivo.

## Build

Para gerar os arquivos estáticos otimizados para produção:

Bash

```
npm run build
```

O output será gerado na pasta `dist/`.

## Sobre o Desenvolvimento & Uso de IA

Este projeto foi construído para aliar boas práticas de engenharia de software à resolução de um problema real do cliente, com foco em **Clean Code**, componentização (SRP) e arquitetura desacoplada.

**O papel da IA:** Durante o fluxo de trabalho, ferramentas de Inteligência Artificial foram utilizadas como assistentes de produtividade — auxiliando na concepção visual inicial no Figma e em ajustes pontuais de _snippets_ de backend/scripts.

Contudo, toda a **arquitetura do projeto, integração do CMS, construção do Piano Navigation e Code Review** foram estruturadas e lapidadas manualmente por mim. A IA atuou como um  copiloto para acelerar tarefas braçais, mas a engenharia, a segurança das regras de negócio, a acessibilidade e o refinamento final de UI/UX são frutos do meu trabalho.
