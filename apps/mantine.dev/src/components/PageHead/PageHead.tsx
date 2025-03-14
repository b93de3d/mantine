import Head from 'next/head';

interface PageHeadProps {
  title: string | undefined;
  description: string | undefined;
}

const metaDescription =
  'Payment processing, messaging, compliance and reporting solutions for small to medium sized bookmakers.';

export function PageHead({ title, description }: PageHeadProps) {
  const _title = title ? `${title} | BookieBase` : 'BookieBase';
  const _description = description || metaDescription;
  return (
    <Head>
      <title>{_title}</title>
      <meta property="description" name="description" content={_description} />
      <meta property="og:title" name="og:title" content={_title} />
      <meta property="og:description" name="og:description" content={_description} />
      <meta property="twitter:title" name="twitter:title" content={_title} />
      <meta property="twitter:description" name="twitter:description" content={_description} />
    </Head>
  );
}
