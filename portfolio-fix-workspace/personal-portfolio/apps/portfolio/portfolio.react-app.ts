import { ReactAppOptions } from '@teambit/react';
import { NetlifyOptions, Netlify } from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  stagingSiteName: 'portfolio-showoff-staging',
  productionSiteName: 'portfolio-showoff-production',
  team: 'enlear',
  redirects: require.resolve('./_redirects'),
};

export const PortfolioApp: ReactAppOptions = {
  name: 'portfolio-app',
  entry: [require.resolve('./portfolio.app-root')],
  deploy: Netlify.deploy(netlifyConfig),
  // prerender: {
  //   routes: [
  //     '/',
  //     '/about',
  //     '/contact',
  //     '/projects',
  //   ],
  // },
};

export default PortfolioApp;
