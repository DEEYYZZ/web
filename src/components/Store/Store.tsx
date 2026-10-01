import { Link } from 'react-router-dom';
import { storeItems } from '../../data/store';
import { useReveal } from '../../hooks/useReveal';
import { StoreCard } from './StoreCard';
import styles from './Store.module.css';

export function Store() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="store" className={styles.section}>
      <div className="shell">
        <div ref={headRef} className={`reveal ${styles.head}`}>
          <span className={styles.eyebrow}>TIENDA DEL SERVIDOR</span>
          <h2>Lo que necesitas<br />para competir</h2>
          <p>Productos oficiales, activación por ticket y cero complicaciones. Elige tu pack y habla con el staff.</p>
        </div>
        <div className={styles.grid}>
          {storeItems.map((item, index) => (
            <StoreCard key={item.id} item={item} delay={index * 0.1} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link to="/store" className={styles.viewAllBtn} data-cursor-active>
            Ver toda la tienda
          </Link>
        </div>
      </div>
    </section>
  );
}
