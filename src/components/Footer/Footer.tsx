import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const columns: ReadonlyArray<{ readonly title: string; readonly links: ReadonlyArray<{ label: string; href: string; external?: boolean }> }> = [
  {
    title: 'Explora',
    links: [
      { label: 'Tienda', href: '/store' },
      { label: 'Torneos', href: '/#tournaments' },
      { label: 'Estadísticas', href: '/#stats' },
      { label: 'Equipo', href: '/#team' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Discord', href: 'https://discord.com', external: true },
      { label: 'Twitter / X', href: 'https://x.com', external: true },
      { label: 'YouTube', href: 'https://youtube.com', external: true },
    ],
  },
  {
    title: 'Información',
    links: [
      { label: 'Normas del servidor', href: '#' },
      { label: 'Privacidad', href: '#' },
      { label: 'Soporte', href: 'https://discord.gg/globalarena', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandWord}>
            GLOBAL<span className={styles.brandAccent}>ARENA</span>
          </span>
          <p>Creado por jugadores,<br />para jugadores.</p>
        </div>
        <div className={styles.cols}>
          {columns.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((link) =>
                link.external || link.href.includes('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.href}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>© {new Date().getFullYear()} Global Arena. Not affiliated with Mojang or Microsoft.</div>
    </footer>
  );
}
