import { ReactAppOptions } from '@teambit/react';
import { NetlifyOptions, Netlify } from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  stagingSiteName: 'portfolio-site-lakindu-hewawasam-staging',
  productionSiteName: 'portfolio-site-lakindu-hewawasam-production',
  team: 'enlear',
  redirects: require.resolve('./_redirects'),
};

export const PortfolioSiteApp: ReactAppOptions = {
  name: 'portfolio-site',
  entry: [require.resolve('./portfolio-site.app-root')],
  // deploy: Netlify.deploy(netlifyConfig),
  // prerender: {
  //   rendererOptions: {
  //     maxConcurrentRoutes: 1,
  //   },
  //   routes: [
  //     '/',
  //     '/about',
  //     '/contact',
  //     '/projects',
  //   ],
  // },
};

export default PortfolioSiteApp;
