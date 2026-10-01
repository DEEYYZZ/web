import styles from './Marquee.module.css';

const items: readonly string[] = [
  'PVP COMPETITIVO',
  'TORNEOS SEMANALES',
  'KITS PERSONALIZADOS',
  'RANKING GLOBAL',
  'RECOMPENSAS DE TEMPORADA',
];

const loopItems = [...items, ...items];

export function Marquee() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {loopItems.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item} <span className={styles.dot}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
