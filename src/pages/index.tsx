import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import * as React from 'react';
import { FiCheck, FiMapPin } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export const ShareButtons = () => (
  <>
    <span className='mr-4'>
      <FacebookShareButton
        url='https://ukraine-two.vercel.app'
        quote='Ukraine: Aquellos que quieran colaborar'
        hashtag='#ukraine'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </span>
    <span className='mr-4'>
      <TelegramShareButton
        url='https://ukraine-two.vercel.app'
        title='Ukraine: Aquellos que quieran colaborar'
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </span>
    <span className='mr-4'>
      <WhatsappShareButton
        url='https://ukraine-two.vercel.app'
        title='Ukraine: Aquellos que quieran colaborar'
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </span>
    <span className='mr-4'>
      <LinkedinShareButton url='https://ukraine-two.vercel.app'>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </span>
    <span className='mr-4'>
      <TwitterShareButton
        url='https://ukraine-two.vercel.app'
        title='Ukraine: Aquellos que quieran colaborar'
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </span>

    <span className='mr-4'>
      <ViberShareButton
        url='https://ukraine-two.vercel.app'
        title='Ukraine: Aquellos que quieran colaborar'
      >
        <ViberIcon size={32} round />
      </ViberShareButton>
    </span>

    <span className='mr-4'>
      <EmailShareButton
        url='https://ukraine-two.vercel.app'
        subject='Ukraine: Aquellos que quieran colaborar'
        body='Ukraine: Aquellos que quieran colaborar'
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </span>
  </>
);

const list = [
  { title: 'Ropa / calzados de mujer, hombre, niños' },
  { title: 'Uniformes' },
  { title: 'Ropa térmica' },
  { title: 'Mantas' },
  { title: 'Ropa de cama' },
  { title: 'Comida ( NO VIDRIO )' },
  { title: 'Agua' },
  { title: 'Platos desechable' },
  { title: 'Botiquines de primeros auxilios' },
  { title: 'Materiales de construcción' },
  { title: 'Muebles' },
  { title: 'Colchoneta esterilla ' },
  { title: 'Tienda de campaña / colchones /sacos de dormir' },
  { title: 'Dispositivos para calentar carpas' },
  { title: 'Calefactores' },
  { title: 'Medios de higiene / tampones, compresas / pañales ' },
  { title: 'Linternas, lámparas independientes' },
  { title: 'Pilas, powerbank, baterías' },
  { title: 'Generadores' },
  {
    title: 'Sillas de ruedas (niños y adultos), caminantes , rodillos, muletas',
  },
  { title: 'Camas de hospital' },
  {
    title: 'Medios de comunicación (teléfonos móviles, walkie-talkies, radios)',
  },
  { title: 'Velas' },
  { title: 'Portátiles y tabletas con la máxima duración de batería posible' },
  { title: 'Camas plegables' },
  {
    title:
      'Recipiente para líquidos con la capacidad de 10-20 litros (bote de agua, combustible, gas)',
  },
  {
    title:
      'Municiones protectoras (cascos, chalecos antibalas, mochilas táctica, comida militar)',
  },
  { title: 'Gasolina, diesel, petróleo' },
];

export const addresses = [
  () => (
    <div className='w-full'>
      <div className='mb-4 text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/qmVE1VNZGZRXN21Q6'
        >
          <FiMapPin className='mx-auto text-center' width={32} height={32} />
        </a>
      </div>
      <div className='mb-2'>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/qmVE1VNZGZRXN21Q6'
        >
          Rambla Santa Monica, 9, Barcelona (iglesia)
        </a>
      </div>
      <br />
      Asociación “Djerelo”
      <br />
      <div className='mt-2'>
        Tel.{' '}
        <a href='tel:653347656' className='text-gray-900 underline'>
          653 347 656
        </a>{' '}
        (Olha Dzyuban)
      </div>
      <br />
      todos los días de 9:00 a 19.30 h
    </div>
  ),
  () => (
    <div className='w-full'>
      <div className='mb-4 text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/Kk5enhfd6qeCjtrJ7'
        >
          <FiMapPin className='mx-auto text-center' width={32} height={32} />
        </a>
      </div>
      <div className='mb-2'>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/Kk5enhfd6qeCjtrJ7'
        >
          C/d&apos;Enric Bargés, 9, 08014 Barcelona (cerca de Sants Estació)
        </a>
      </div>
      <br />
      Escuela Ucraniana Shevchenko /Asociación &quot;Txervona Kalyna&quot;
      (Yuliya Dovgopola)
      <br />
      <div className='mt-2'>
        Tel.{' '}
        <a href='tel:616655630' className='text-gray-900 underline'>
          616 655 630
        </a>{' '}
      </div>
      <br />
      Todos los sábados de 15:00 a 18:00
    </div>
  ),
  () => (
    <div className='w-full'>
      <div className='mb-4 text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/2B2qSVFQc3QR82Kr6'
        >
          <FiMapPin className='mx-auto text-center' width={32} height={32} />
        </a>
      </div>
      <div className='mb-2'>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/2B2qSVFQc3QR82Kr6'
        >
          C/Josep Miquel Quintana 69 08950 Esplugues
        </a>
      </div>
      <br />
      Asociación Taras Shevchenko (Joan Cerezo) de lunes a viernes
      <br />
      <div className='mt-2'>
        Tel.{' '}
        <a href='tel:651986943' className='text-gray-900 underline'>
          651 986 943
        </a>{' '}
      </div>
      <br />
      10:00-14:00, 15:00-20:00
    </div>
  ),
  () => (
    <div className='w-full'>
      <div className='mb-4 text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/c6JC2BL8ozxUFfHZ8'
        >
          <FiMapPin className='mx-auto text-center' width={32} height={32} />
        </a>
      </div>
      <div className='mb-2'>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/c6JC2BL8ozxUFfHZ8'
        >
          C/Pont de Traball Digne, 15
        </a>
      </div>
      <br />
      Instituto Salvador Seguí (Sant Martí)
      <br />
      Escuela Ucraniana “Mriya” de lunes a sábado
      <br />
      8:00-18:00
    </div>
  ),
];

type AddressType = () => JSX.Element;

export const Address = ({ value }: { value: AddressType }) => {
  return (
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
      <div className='flex flex-1 flex-col justify-between bg-white p-6'>
        <div className='flex-1'>
          <div className='mt-3 text-base text-gray-500'>{value()}</div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
        <section className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <NextImage src='images/flag.svg' width={256} height={171} />

            <h2 className='p-20 pb-0 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              AYUDA HUMANITARIA A LOS RESIDENTES Y REFUGIADOS DE UCRANIA
            </h2>
          </div>

          <div className='mx-auto max-w-7xl p-4 sm:p-6 lg:p-8'>
            <div className='mb-8 text-center'>
              <div className='mt-8 pb-4 text-xl tracking-tight text-gray-900 lg:text-xl'>
                <h3 className='mt-8 pb-4 text-3xl font-bold tracking-tight text-gray-800 lg:text-3xl'>
                  PUNTOS DE RECOGIDA
                </h3>

                <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4'>
                  {addresses.map((address: AddressType, i: number) => (
                    <Address key={i} value={address} />
                  ))}
                </div>
              </div>

              <p className='mt-8'>
                <ShareButtons />
              </p>
            </div>

            <div className='bg-white'>
              <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
                <div className='mx-auto max-w-3xl text-center'>
                  <h2 className='text-3xl font-extrabold text-gray-900'>
                    LISTA DE LO MÁS NECESARIO
                  </h2>
                </div>
                <dl className='mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8'>
                  {list.map((feature) => (
                    <div key={feature.title} className='relative'>
                      <dt>
                        <FiCheck
                          className='absolute h-6 w-6 text-green-500'
                          aria-hidden='true'
                        />
                        <p className='ml-9 text-lg font-medium leading-6 text-gray-900'>
                          {feature.title}
                        </p>
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
