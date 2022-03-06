import * as React from 'react';

import { AddressesSection } from '@/components/bits/home/AddressesSection';
import { ItemsSection } from '@/components/bits/home/ItemsSection';
import { LinksSection } from '@/components/bits/home/LinksSection';
import { ShareButtonsSection } from '@/components/bits/ShareButtonsSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo date='2022' />

      <Header />

      <main className='relative bg-gray-50 px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-8 lg:pb-28'>
        <section className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h2 className='mt-10 px-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:px-20'>
              AYUDA HUMANITARIA A LOS RESIDENTES Y REFUGIADOS DE UCRANIA
            </h2>
          </div>

          <div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
            <ItemsSection />

            <ShareButtonsSection />

            <AddressesSection />

            <LinksSection />
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
