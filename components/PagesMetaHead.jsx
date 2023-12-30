import Head from "next/head";

function PagesMetaHead({
  title,
  keywords,
  description,
  og_title,
  og_site_name,
  og_type,
  og_url,
  og_image,
  og_description,
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="author" content="Behance | Instagram Surendarv" />
      <meta property="og:title" content={og_title} />
      <meta property="og:site_name" content={og_site_name} />
      <meta property="og:url" content={og_url} />
      <meta property="og:description" content={og_description} />
      <meta property="og:type" content={og_type} />
      <meta property="og:image" content={og_image} />
      <link rel="apple-touch-icon" sizes="180x180" href={og_image}></link>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Next.js & TailwindCSS Portfolio Project",
  keywords: "next.js, react, web, ui",
  keywords: "Simple and multi-page next.js and react application",
};

export default PagesMetaHead;
