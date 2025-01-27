let normalCounter = 1; // Contador para senhas normais
let priorityCounter = 1; // Contador para senhas prioritárias

export function getPassword(priority?: boolean): string {
  if (priority) {
    return `P${priorityCounter++}`;
  } else {
    // Gera senha normal com "A" seguido pelo contador de senhas normais
    return `A${normalCounter++}`;
  }
}

export const cleanCounters = () => {
  normalCounter = 1;
  priorityCounter = 1;
};
