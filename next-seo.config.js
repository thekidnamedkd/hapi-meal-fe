/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "HAPI MEAL",
  titleTemplate: "%s | HAPI MEAL",
  defaultTitle: "HAPI MEAL",
  description: "What's in the box?",
  canonical: "https://happimeal.lol",
  openGraph: {
    url: "https://happimeal.lol",
    title: "HAPI MEAL",
    description: "What's in the box?",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "https://lombeira.vercel.app/ og-image",
      },
    ],
    site_name: "HAPI MEAL",
  },
  twitter: {
    handle: "@hapi_meal",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
