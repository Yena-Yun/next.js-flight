import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`script loaded correctly.`)}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
