import type { StatItem } from '../types';

export const stats: readonly StatItem[] = [
  { id: 'players', label: 'Jugadores activos', value: 42000, suffix: '+' },
  { id: 'tournaments', label: 'Torneos disputados', value: 1280, suffix: '+' },
  { id: 'countries', label: 'Países conectados', value: 96 },
  { id: 'prizes', label: 'Premios repartidos', value: 15000, prefix: '€', suffix: '+' },
];
