import Head from 'next/head';
import { DEFAULT_THEME } from '@mantine/core';
import { greycliffCF } from './GreycliffCF/GreycliffCF';
import { roboto } from './Roboto/Roboto';

export function FontsStyle() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{ --docs-font-primary: ${roboto.style.fontFamily}, ${DEFAULT_THEME.fontFamily}; }`,
          // __html: `:root{ --docs-font-primary: ${greycliffCF.style.fontFamily}, ${DEFAULT_THEME.fontFamily}; }`,
        }}
      />
    </Head>
  );
}
