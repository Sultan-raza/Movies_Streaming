import Head from 'next/head';
import { NextPage } from 'next';

interface MetaProps {
  title: string;
  description: string;
  image: string;
}

const Meta: NextPage<MetaProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title} | Sultan Raza</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />

      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
