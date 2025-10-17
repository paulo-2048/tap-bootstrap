# Voz da Ciência | Bootstrap

Uma aplicação web Bootstrap 5 para acessibilidade de conteúdo científico, apresentando páginas de landing, login e registro. Este projeto é parte de um webapp que transforma artigos científicos em formato de áudio para a comunidade com deficiência visual.

**Engenharia de Software** | Tópicos Avançados em Programação

## Estrutura do Projeto

```
tap-bootstrap/
├── public/
│   ├── index.html           # Página inicial (landing)
│   ├── login.html           # Página de login
│   ├── register.html        # Página de registro
│   ├── css/
│   │   ├── main.css         # Estilos da página inicial
│   │   ├── login.css        # Estilos da página de login
│   │   └── register.css     # Estilos da página de registro
│   ├── js/
│   │   ├── main.js          # Scripts da página inicial (notificações toast, rolagem suave)
│   │   ├── login.js         # Scripts da página de login
│   │   └── register.js      # Scripts da página de registro
│   └── img/
│       ├── home-1.png       # Imagem da seção hero
│       └── ucsal/
│           └── logo-1.png   # Logo da UCSAL
├── package.json             # Dependências do projeto
└── README.md                # Este arquivo
```

## Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- Gerenciador de pacotes Yarn

### Instalação

```bash
yarn install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
yarn start
```

Isso iniciará um servidor local em `http://localhost:8080` e abrirá automaticamente o navegador.

## Funcionalidades

- **Bootstrap 5.3.8** - Versão mais recente via CDN
- **Design Responsivo** - Abordagem mobile-first
- **Foco em Acessibilidade** - Projetado para a comunidade com deficiência visual
- **Notificações Toast** - Sistema de notificações integrado
- **Rolagem Suave** - Experiência de navegação aprimorada
- **Validação de Formulários** - Formulários de login e registro
- **Spinners de Carregamento** - Feedback visual para operações assíncronas

## Páginas

### Página Inicial (`index.html`)

- Barra de navegação com links para Login e Registro
- Seção hero apresentando "Voz da Ciência"
- Seção de funcionalidades destacando acessibilidade, customização e qualidade
- Rodapé com links do site

### Página de Login (`login.html`)

- Formulário de email e senha
- Checkbox "Salvar Login"
- Spinner de carregamento para autenticação
- Notificações toast para feedback

### Página de Registro (`register.html`)

- Formulário de nome, email e senha
- Checkbox "Salvar Login"
- Spinner de carregamento para registro
- Notificações toast para feedback

## Utilitários JavaScript

O arquivo `main.js` fornece funções globais de notificação toast:

- `showToast(message, type, delay)` - Exibe toast customizado
- `showError(message)` - Exibe notificação de erro
- `showWarning(message)` - Exibe notificação de aviso
- `showSuccess(message)` - Exibe notificação de sucesso
- `showInfo(message)` - Exibe notificação de informação

## Scripts Disponíveis

- `yarn start` - Inicia o servidor de desenvolvimento na porta 8080
- `yarn dev` - Mesmo que start
- `yarn lint` - Executa o linter (placeholder)
- `yarn format` - Formata o código (placeholder)

---

**Voz da Ciência - Democratizando o conhecimento científico através da acessibilidade**
