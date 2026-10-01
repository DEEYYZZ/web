import { HeroCyber } from '../components/Hero/HeroCyber';
import { Marquee } from '../components/Marquee/Marquee';
import { Stats } from '../components/Stats/Stats';
import { Store } from '../components/Store/Store';
import { TournamentCta } from '../components/TournamentCta/TournamentCta';
import { Team } from '../components/Team/Team';

export function HomePage() {
  return (
    <>
      <HeroCyber />
      <Marquee />
      <Stats />
      <Store />
      <TournamentCta />
      <Team />
    </>
  );
}
