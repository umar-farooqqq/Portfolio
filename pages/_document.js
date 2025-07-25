import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head></Head>
      <body className="antialiased leading-8 overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
