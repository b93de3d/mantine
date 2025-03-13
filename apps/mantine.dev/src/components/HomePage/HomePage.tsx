import Head from 'next/head';
import BookieBaseLanding from '../BookieBaseLanding/BookieBaseLanding';
import { Footer } from '../Footer';
import { Shell } from '../Shell';
import classes from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <Head>
        <title>BookieBase</title>
      </Head>
      <Shell mobileNavbarOnly>
        <div className={classes.root}>
          <BookieBaseLanding />
        </div>
        <Footer />
      </Shell>
    </>
  );
}
