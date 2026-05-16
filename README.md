# TaskFlow

Gerenciador de tarefas online desenvolvido com **Next.js**, **React** e **TypeScript**. O projeto faz parte do módulo de testes e qualidade de código, com foco em componentes reutilizáveis, hooks customizados e cobertura de testes com Jest e Testing Library.

## Sobre o projeto

O **TaskFlow** exibe uma lista de tarefas na página inicial, com status (`pending` ou `completed`), título e descrição. Os dados são carregados de forma assíncrona (simulando uma API) e apresentados em um layout em grade. Há também uma página dedicada para criação de novas tarefas.

### Funcionalidades

- Listagem de tarefas na home com carregamento assíncrono
- Exibição em grade com cards por tarefa
- Página **Nova Tarefa** com formulário
- Hook `useContadorDeTarefas` para contagem de tarefas
- Layout com cabeçalho e rodapé
- Testes unitários para componentes, páginas e hooks

## Tecnologias

| Área      | Stack                    |
| --------- | ------------------------ |
| Framework | Next.js 15               |
| UI        | React 19, Tailwind CSS 4 |
| Linguagem | TypeScript               |
| Testes    | Jest, Testing Library    |
| Qualidade | ESLint                   |

## Estrutura do projeto

```
src/
├── app/                 # App Router (páginas e componentes)
│   ├── components/      # Header, Footer, Grid, Card, ListaTarefas, etc.
│   ├── new-task/        # Página de nova tarefa
│   └── page.tsx         # Home
├── data/                # Dados simulados das tarefas
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários (ex.: tarefas extras)
├── types/               # Tipos TypeScript
└── tests/               # Testes unitários
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm ou yarn

## Instalação

```bash
# Clone o repositório (ajuste a URL conforme seu remote)
git clone <url-do-repositorio>
cd taskflow

# Instale as dependências
npm install
```

## Scripts disponíveis

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento     |
| `npm run build`   | Gera a build de produção               |
| `npm run start`   | Inicia o servidor em modo produção     |
| `npm run lint`    | Executa o ESLint                       |
| `npm test`        | Roda os testes em modo watch           |
| `npm run test:ci` | Roda os testes uma vez (ideal para CI) |

## Como usar

1. Inicie o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

3. Para validar os testes:

   ```bash
   npm run test:ci
   ```

## Autor

Desenvolvido por Anne Carolayne - Aluno de Desenvolvimento Full Stack em Python
