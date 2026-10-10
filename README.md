# Site Renan

Este é o repositório do site oficial do **Renan Francioni**. O projeto consiste em uma landing page moderna e responsiva focada em divulgar seus trabalhos, vídeos do YouTube, músicas no Spotify e também um formulário de contato para eventos, shows e colaborações.

O design original deste projeto foi criado no Figma e pode ser acessado [aqui](https://www.figma.com/design/VzdlHmS9lpzYoU5WmV6SbZ/Site-Renan).

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:
- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)** (para estilização rápida e responsiva)
- **[Motion](https://motion.dev/)** (para animações fluidas)
- **[Lucide React](https://lucide.dev/)** (para os ícones)
- **Integrações:** Spotify Embed, YouTube Embed e Formspree (para recebimento de contatos)

## 📦 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente:

1. Instale as dependências executando o comando na raiz do projeto:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173/`).

## 🛠️ Como Fazer o Build para Produção

Para gerar a versão de produção otimizada do site, basta rodar:
```bash
npm run build
```
Os arquivos gerados estarão disponíveis na pasta `dist/` e prontos para serem publicados (hospedados) em plataformas como Vercel, Netlify, etc.