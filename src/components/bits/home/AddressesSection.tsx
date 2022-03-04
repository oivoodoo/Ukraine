import * as React from 'react';
import { FiMapPin } from 'react-icons/fi';

const addresses = [
  () => (
    <div className='flex w-full flex-col space-y-4'>
      <div className='text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/qmVE1VNZGZRXN21Q6'
        >
          <FiMapPin
            className='mx-auto text-center'
            size={28}
            width={28}
            height={28}
          />
        </a>
      </div>
      <div>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/qmVE1VNZGZRXN21Q6'
        >
          Rambla Santa Monica, 9, Barcelona (iglesia)
        </a>
      </div>
      <div>Asociación “Djerelo”</div>
      <div>
        Tel.{' '}
        <a href='tel:653347656' className='text-gray-900 underline'>
          653 347 656
        </a>{' '}
        (Olha Dzyuban)
      </div>
      <div>Todos los días de 9:00 a 19.30 h</div>
    </div>
  ),
  () => (
    <div className='flex w-full flex-col space-y-4'>
      <div className='text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/Kk5enhfd6qeCjtrJ7'
        >
          <FiMapPin
            className='mx-auto text-center'
            size={28}
            width={28}
            height={28}
          />
        </a>
      </div>
      <div>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/Kk5enhfd6qeCjtrJ7'
        >
          C/d&apos;Enric Bargés, 9, 08014 Barcelona (cerca de Sants Estació)
        </a>
      </div>
      <div>
        Escuela Ucraniana Shevchenko /Asociación &quot;Txervona Kalyna&quot;
        (Yuliya Dovgopola)
      </div>
      <div>
        Tel.{' '}
        <a href='tel:616655630' className='text-gray-900 underline'>
          616 655 630
        </a>{' '}
      </div>
      <div>Todos los sábados de 15:00 a 18:00</div>
    </div>
  ),
  () => (
    <div className='flex w-full flex-col space-y-4'>
      <div className='text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/2B2qSVFQc3QR82Kr6'
        >
          <FiMapPin
            className='mx-auto text-center'
            size={28}
            width={28}
            height={28}
          />
        </a>
      </div>
      <div>
        <a
          className='mb-4 text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/2B2qSVFQc3QR82Kr6'
        >
          C/Josep Miquel Quintana 69 08950 Esplugues
        </a>
      </div>
      <div>Asociación Taras Shevchenko (Joan Cerezo) de lunes a viernes</div>
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
    <div className='flex w-full flex-col space-y-4'>
      <div className='text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/c6JC2BL8ozxUFfHZ8'
        >
          <FiMapPin
            className='mx-auto text-center'
            size={28}
            width={28}
            height={28}
          />
        </a>
      </div>
      <div>
        <a
          className='text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/c6JC2BL8ozxUFfHZ8'
        >
          C/Pont de Traball Digne, 15
        </a>
      </div>
      <div>Instituto Salvador Seguí (Sant Martí)</div>
      <div>Escuela Ucraniana “Mriya” de lunes a sábado</div>
      <div>8:00-18:00</div>
    </div>
  ),
  () => (
    <div className='flex w-full flex-col space-y-4'>
      <div className='text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/w6RPFspHq4Xj5qhg8'
        >
          <FiMapPin
            className='mx-auto text-center'
            size={28}
            width={28}
            height={28}
          />
        </a>
      </div>
      <div>
        <a
          className='text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/w6RPFspHq4Xj5qhg8'
        >
          Carretera de Rubí, Km. 4, Sant Cugat
        </a>
      </div>
      <div>Centre Jardineria Masó-Navarro</div>
      <div>
        Tel.{' '}
        <a href='tel:600009748' className='text-gray-900 underline'>
          600 009 748
        </a>{' '}
      </div>
      <div>10:00-19:00, dom: 10:00-13:00</div>
    </div>
  ),
  () => (
    <div className='flex w-full flex-col space-y-4'>
      <div className='text-center'>
        <a
          className='self-center text-center text-gray-900 no-underline hover:underline'
          href='https://goo.gl/maps/w6RPFspHq4Xj5qhg8'
        >
          <FiMapPin
            className='mx-auto text-center'
            size={28}
            width={28}
            height={28}
          />
        </a>
      </div>
      <div>
        <a
          className='text-gray-900 underline hover:underline'
          href='https://goo.gl/maps/VfYSoHNWNDm8XSSWA'
        >
          Avinguda del Pla del Vinyet, 81, 85, 08172, Sant Cugat
        </a>
      </div>
      <div>Casal Torreblanca</div>
      <div>
        Tel.{' '}
        <a href='tel:699802436' className='text-gray-900 underline'>
          699 802 436
        </a>{' '}
      </div>
    </div>
  ),
];

type AddressType = () => JSX.Element;

const Address = ({ value }: { value: AddressType }) => {
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

export const AddressesSection = () => {
  return (
    <div id='addresses-section' className='mb-8 text-center'>
      <div className='mt-8 text-xl tracking-tight text-gray-900 lg:text-xl'>
        <h3 className='mt-8 px-5 pb-4 text-xl font-bold tracking-tight text-gray-800 lg:px-5 lg:text-2xl'>
          PUNTOS DE RECOGIDA
        </h3>

        <div className='mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4'>
          {addresses.map((address: AddressType, i: number) => (
            <Address key={i} value={address} />
          ))}
        </div>
      </div>
    </div>
  );
};
