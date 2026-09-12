# TX Executive Hub

PWA executivo da Talent Xpress, desenvolvido para Adriana Senhorinha.

## Instalação

Não há dependências de build. Clone o repositório e entre na pasta do projeto.

```bash
git clone https://github.com/venturax135/TX-Executive-Hub.git
cd TX-Executive-Hub
```

## Execução Local

Service Workers exigem HTTP/HTTPS. Com Python, execute:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## GitHub Pages

O `index.html` fica na raiz e os recursos usam caminhos relativos (`./css/style.css`, `./js/app.js` e `./js/prompts.js`). Em **Settings > Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.

## Instalação como aplicativo

No Microsoft Edge, abra a versão HTTPS publicada, acesse **… > Apps > Install TX Executive Hub** (ou use o ícone de instalação na barra de endereço) e confirme.

## Recursos

Favoritos, histórico das últimas 20 consultas via `localStorage`, dossiê executivo, prompts de Dashboard/Hoje/Financeiro/Operações/Jurídico/Contratos/CEO/Follow-up, clipboard, abertura do Microsoft 365 Copilot, layout responsivo e cache PWA.

## Estrutura

```text
/
├── index.html
├── manifest.json
├── service-worker.js
├── README.md
├── css/style.css
├── js/app.js
├── js/prompts.js
├── assets/icon-192.png
└── assets/icon-512.png
```
