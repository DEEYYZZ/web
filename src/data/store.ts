import type { StoreItem } from '../types';

export const storeItems: readonly StoreItem[] = [
  {
    id: 'challenger-rank',
    name: 'VIP',
    description: 'Prioridad de cola, recompensas extra y beneficios dentro del servidor.',
    price: '10 € / mes',
    glyph: '⚔',
    colorFrom: '#ff6b57',
    colorTo: '#7a1710',
    badge: 'MÁS ELEGIDO',
  },
  {
    id: 'cosmetic-crate',
    name: 'Clan VIP',
    description: 'Registra tu banda, organiza tu squad y compite por el control del mapa.',
    price: '30 €',
    glyph: '✦',
    colorFrom: '#ffb057',
    colorTo: '#7a4a10',
  },
  {
    id: 'season-pass',
    name: 'Pase de batalla',
    description: 'Recompensas, retos y contenido exclusivo durante toda la temporada.',
    price: '12 €',
    glyph: '◆',
    colorFrom: '#57ffb0',
    colorTo: '#107a4a',
  },
  {
    id: 'legend-bundle',
    name: 'Tokens',
    description: 'La moneda premium para desbloquear contenido y extras del servidor.',
    price: 'Desde 3,99 €',
    glyph: '♛',
    colorFrom: '#57b0ff',
    colorTo: '#10467a',
  },
];
