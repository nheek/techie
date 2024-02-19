import Head from 'next/head';

const name = 'Techie';
export const siteTitle = 'Techie';

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="hidden md:flex relative items-center">
        <nav>
          <ul className="flex gap-[10%] lg:gap-[15%] items-center">
            <li className="cursor-pointer font-bold text-4xl">TECHIE</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">App</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </nav>

        <nav className="bg-gray-200 rounded-2xl ml-auto p-2 text-xs font-semibold w-[20%]">
          <ul className="flex gap-[10%] items-center">
            <li className="cursor-pointer w-[30%] text-right">LOGIN</li>
            <li className="cursor-pointer bg-gray-800 text-white text-center rounded-md p-2 h-[40px] w-[60%] flex items-center justify-center rounded-xl">SIGN UP</li>
          </ul>
        </nav>
      </header>

      <header className="md:hidden">
        <h1 className="cursor-pointer font-bold text-4xl">TECHIE</h1>
      </header>
    </>
  );
}