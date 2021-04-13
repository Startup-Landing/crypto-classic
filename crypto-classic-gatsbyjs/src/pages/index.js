import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Banner from 'sections/banner';
import WhyChoose from 'sections/why-choose';
import SalesInvestment from 'sections/sales-investment';
import RoadMap from 'sections/roadmap';
import CountDownBlock from 'sections/countdown';
import WorldwideUsers from 'sections/worldwide-user';
import OurWallet from 'sections/our-wallet';
import CallToAction from 'sections/call-to-action';
import Layout from 'components/layout';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Startup Crypto Classic Landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <WhyChoose />
        <SalesInvestment />
        <RoadMap />
        <CountDownBlock />
        <WorldwideUsers />
        <OurWallet />
        <CallToAction />
      </Layout>
    </StickyProvider>
  );
}
