export interface Prompt {
  id: number;
  description: string;
  content: string;
}

export const prompts: Prompt[] = [
  {
    id: 1,
    description: "Breve descrição do Prompt 1",
    content: `### Prompt 1\n\nTexto completo do Prompt 1...`,
  },
  {
    id: 2,
    description: "Breve descrição do Prompt 2",
    content: `### Prompt 2\n\nTexto completo do Prompt 2...`,
  },
  {
    id: 2,
    description: "Breve descrição do Prompt 2",
    content: `### Prompt 2\n\nTexto completo do Prompt 2...`,
  },
];
