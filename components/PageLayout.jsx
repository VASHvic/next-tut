import Head from 'next/head';
import Link from 'next/link';

export default function PageLayout({children, title = 'Rick & Morty - App'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The best app to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <Link href="/">⚗ Rick & Morty</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
