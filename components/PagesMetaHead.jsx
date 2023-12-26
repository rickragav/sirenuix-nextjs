import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.sirenuix.com"></link>
      <title>{title}</title>

      {/* Set lang attribute */}
      <html lang="en" />

      {/* Hreflang tags for language variations */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://www.sirenuix.com"
      />
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Next.js & TailwindCSS Portfolio Project",
  keywords: "next.js, react, web, ui",
  keywords: "Simple and multi-page next.js and react application",
};

export default PagesMetaHead;
