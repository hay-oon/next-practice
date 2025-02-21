import "@/styles/globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/context/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <div className="flex justify-center items-center font-bold text-2xl py-4 px-4 border-b-2 border-gray-300 dark:border-gray-700">
        <nav className="flex gap-4 items-center">
          <Link href="/">home</Link>
          <Link href="/hayoon/jeong">HAYOON</Link>
          <Link href="/search">search</Link>
          <Link href="/codeit_part2_team1">codeit</Link>
          <ThemeToggle />
        </nav>
      </div>
      {children}
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HAYOON</title>
        <link rel="icon" href="/images/winter.png" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
