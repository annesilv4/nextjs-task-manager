import type { Tarefa } from "../types/tarefas";

const tarefas: Tarefa[] = [
    {
        id: "1",
        title: "Criar estrutura do projeto",
        description: "Configurar Next.js, TypeScript e ESLint no projeto.",
        status: "completed",
    },
    {
        id: "2",
        title: "Desenvolver componente de lista",
        description: "Criar o componente ListaTarefas para exibir as tarefas.",
        status: "completed",
    },
    {
        id: "3",
        title: "Integrar dados com a página principal",
        description: "Exibir a lista de tarefas na home usando os dados simulados.",
        status: "pending",
    },
    {
        id: "4",
        title: "Escrever testes unitários",
        description: "Cobrir os componentes principais com testes usando Jest.",
        status: "pending",
    },
    {
        id: "5",
        title: "Publicar o projeto",
        description: "Fazer deploy da aplicação na Vercel.",
        status: "pending",
    },
    {
        id: "6",
        title: "Criar sistema de autenticação",
        description: "Implementar login e logout com NextAuth.js.",
        status: "pending",
    },
    {
        id: "7",
        title: "Adicionar filtro por status",
        description: "Permitir filtrar tarefas por 'pending' e 'completed'.",
        status: "pending",
    },
    {
        id: "8",
        title: "Implementar paginação",
        description: "Paginar a lista de tarefas para melhor usabilidade.",
        status: "pending",
    },
    {
        id: "9",
        title: "Criar formulário de nova tarefa",
        description: "Adicionar formulário para criar novas tarefas com validação.",
        status: "pending",
    },
    {
        id: "10",
        title: "Permitir editar tarefas",
        description: "Implementar funcionalidade de edição inline de tarefas existentes.",
        status: "pending",
    },
    {
        id: "11",
        title: "Permitir excluir tarefas",
        description: "Adicionar botão de exclusão com confirmação antes de remover.",
        status: "pending",
    },
    {
        id: "12",
        title: "Adicionar modo escuro",
        description: "Implementar dark mode usando Tailwind CSS e preferências do sistema.",
        status: "pending",
    },
    {
        id: "13",
        title: "Configurar banco de dados",
        description: "Integrar Prisma com PostgreSQL para persistência dos dados.",
        status: "pending",
    },
    {
        id: "14",
        title: "Criar API routes",
        description: "Desenvolver endpoints REST com Next.js API Routes para as tarefas.",
        status: "pending",
    },
    {
        id: "15",
        title: "Escrever testes de integração",
        description: "Criar testes de integração para as API routes com supertest.",
        status: "pending",
    },
];

export async function getTarefas(): Promise<Tarefa[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(tarefas), 300);
    });
}
