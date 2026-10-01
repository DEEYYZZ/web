import { useReveal } from '../../hooks/useReveal';
import styles from './TournamentCta.module.css';

export function TournamentCta() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="tournaments" className={styles.section}>
      <div className={styles.glow} />
      <div ref={ref} className={`shell reveal ${styles.inner}`}>
        <span className={styles.badge}>
          <span className={styles.dot} /> TEMPORADA ACTIVA
        </span>
        <h2>Global Arena Championship</h2>
        <p>Cuadros semanales, ranking global y premios reales. Forma tu squad y demuestra lo que vales.</p>
        <a href="#" className={styles.cta} data-cursor-active>
          Apuntarme al torneo
        </a>
      </div>
    </section>
  );
}
