import * as React from 'react';
import { FiCheck } from 'react-icons/fi';

interface ItemType {
  title: string;
  description?: string;
}

const list: ItemType[] = [
  {
    title: 'Botiquines de primeros auxilios',
    description:
      'ibuprofeno y paracetamol NO necesitan mucho, mejor medicinas para niños, antibióticos, antisépticos, materiales estériles.',
  },
  {
    title: 'Comida ( NO VIDRIO )',
    description:
      '¡Necesitamos desesperadamente productos sin lactosa y sin gluten, incluida la fórmula infantil sin lactosa!',
  },
  { title: 'Ropa térmica' },
  { title: 'Mantas' },
  { title: 'Ropa de cama' },
  {
    title: 'Ropa / calzados de mujer, hombre, niños',
    description:
      'Ropa muy necesaria y elementos esenciales para recién nacidos, ropa interior solo nueva',
  },
  { title: 'Platos desechable' },
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
  {
    title: 'Medios de comunicación (teléfonos móviles, walkie-talkies, radios)',
  },
  { title: 'Velas' },
  { title: 'Portátiles y tabletas con la máxima duración de batería posible' },
];

export const ItemsSection = () => {
  return (
    <div id='items-section' className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-xl font-extrabold text-gray-800 lg:text-2xl'>
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

              {feature.description && (
                <dd className='mt-2 ml-9 text-base text-gray-500'>
                  {feature.description}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
