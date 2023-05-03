import Head from 'next/head';

import Feed from '../components/Feed';
import DrawerLayout from '../components/NavBar/DrawerLayout';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>XP</title>
        <meta name="description" content="XP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/circle_logo.ico" />
      </Head>

      <main>
        <div className='bg-base-100 flex-col'>
          <DrawerLayout>
            <Feed />
            <Footer />
          </DrawerLayout>
        </div>
      </main>
    </>
  );
}