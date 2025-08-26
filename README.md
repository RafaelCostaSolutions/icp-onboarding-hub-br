
#  ICP Onboarding Hub BR

Uma iniciativa voltada para **onboarding de desenvolvedores e criadores brasileiros** no ecossistema **Internet Computer (ICP)**.

---

##  Problema

Muitos desenvolvedores no Brasil têm talento, mas não encontram **conteúdo acessível e suporte local** para entrar no universo Web3.
Este projeto resolve isso oferecendo **tutoriais, materiais educativos e integração com a comunidade ICP**, tudo em português.

---

## Objetivo

Construir uma presença local forte para o ICP por meio de:

* Atividades de onboarding;
* Conteúdo educacional em português;
* Comunicação estratégica para a comunidade Web3 no Brasil.

---

##  Como rodar o projeto (Local)

1. **Instalar o DFX (ICP SDK)**

   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```

2. **Clonar este repositório**

   ```bash
   git clone https://github.com/SEU-USUARIO/icp-onboarding-hub-br.git
   cd icp-onboarding-hub-br
   ```

3. **Iniciar a réplica local**

   ```bash
   dfx start --background
   ```

4. **Fazer o deploy local**

   ```bash
   dfx deploy
   ```

5. **Abrir no navegador**
   [http://localhost:8000](http://localhost:8000)

---

##  Estrutura do Projeto

* `index.html` – Página inicial
* `tutoriais.html` – Tutoriais passo a passo (ICP Quickstart)
* `documentacao.html` – Documentação e links úteis
* `style.css` – Estilos globais
* `script.js` – Funções interativas (copiar comando, acordeão, etc.)
* `dfx.json` – Configuração mínima de canister ICP
* `src/` e `assets/` – Arquivos de código e estáticos

---

##  Entregáveis (Hackathon)

*  Repositório público no GitHub com `dfx.json`
*  Site funcional com tutoriais e links da comunidade
*  **Vídeo Demo** – walkthrough do site e código
*  **Pitch Video** – problema, solução, roadmap e impacto

---

 Roadmap – Ações como Embaixador do ICP (Brasil)
* Onboarding & Educação

Criar vídeos curtos explicando o que é o ICP (em português).

Publicar uma série educacional no LinkedIn e no Instagram.

Produzir um guia rápido para iniciantes: “Primeiros Passos com ICP” (em PDF ou Notion).

* Engajamento Comunitário

Conectar o projeto com grupos universitários locais (IEEE, centros acadêmicos, etc.).

Organizar sessões online ou palestras introdutórias (ao vivo ou via Discord).

Manter presença ativa nos canais do ICP e compartilhar atualizações com a comunidade brasileira.

* Conteúdo Técnico & Missões

Escrever tutoriais acessíveis para iniciantes (em Markdown ou vídeo) mostrando como usar o ICP.

Compartilhar casos de uso locais e oportunidades Web3 no Brasil.

Traduzir documentos técnicos essenciais para o português, ampliando o acesso.

* Expansão & Networking

Convidar outros desenvolvedores e criadores brasileiros para explorar o ecossistema ICP.

Incentivar a participação local em futuros hackathons do ICP.

Ajudar a estruturar hubs regionais de embaixadores (ex.: Nordeste, Centro-Oeste, etc.).

---

##  Impacto Comunitário

* Criação de vídeos curtos explicando ICP em português.
* Publicação de tutoriais acessíveis para iniciantes.
* Conexão com grupos universitários e IEEE.
* Incentivo à participação em hackathons ICP no Brasil.

---

 O objetivo é tornar o ICP mais acessível, visível e ativo no Brasil — especialmente para estudantes, desenvolvedores iniciantes e criadores de conteúdo Web3.

---

##  Licença

MIT License – uso e adaptação livres.

---

## 🚀 Deploy Local Realizado com Sucesso

### ✅ Comprovante de Funcionamento:
- **Canister ID Local:** `uxrrr-q7777-77774-qaaaq-cai`
- **URL Local:** http://uxrrr-q7777-77774-qaaaq-cai.localhost:4943/
- **Comando Executado:** `dfx deploy`

### 📋 Como Executar Localmente:
```bash
# Iniciar blockchain local
dfx start

# Fazer deploy dos canisters
dfx deploy

# Acessar frontend
open http://uxrrr-q7777-77774-qaaaq-cai.localhost:4943/
