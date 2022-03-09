import { UsersIcon } from '@heroicons/react/outline';
import { TelegramIcon } from 'next-share';
import * as React from 'react';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

interface LinkType {
  title: string;
  description: string;
  href: string;
  icon: () => JSX.Element;
  iconForeground: string;
  iconBackground: string;
}

const actions = [
  {
    title: 'icanhelp.host (airbnb)',
    href: 'https://icanhelp.host/',
    description:
      'Conectamos a los ucranianos que buscan refugio con personas en Europa dispuestas a ayudar',
    icon: () => <UsersIcon className='h-6 w-6' aria-hidden='true' />,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Telegram INFO HELP',
    href: 'https://t.me/infohelpBCN',
    description: 'Canal de telegramas de Barcelona',
    icon: () => <TelegramIcon className='h-6 w-6' aria-hidden='true' round />,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'EU',
    href: 'https://ec.europa.eu/info/strategy/priorities-2019-2024/stronger-europe-world/eu-solidarity-ukraine/eu-assistance-ukraine/information-people-fleeing-war-ukraine_en',
    description:
      'Información para personas que huyen de la guerra en Ucrania',
    icon: () => <UsersIcon className='h-6 w-6' aria-hidden='true' />,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
];

const Link = ({
  action,
  actionIdx,
}: {
  action: LinkType;
  actionIdx: number;
}) => {
  return (
    <div
      key={action.title}
      className={classNames(
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === actions.length - 1
          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
          : '',
        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
      )}
    >
      <div>
        <span
          className={classNames(
            action.iconBackground,
            action.iconForeground,
            'inline-flex rounded-lg p-3 ring-4 ring-white'
          )}
        >
          {action.icon()}
        </span>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-medium'>
          <a href={action.href} className='focus:outline-none'>
            {/* Extend touch target to entire panel */}
            <span className='absolute inset-0' aria-hidden='true' />
            {action.title}
          </a>
        </h3>
        <p className='mt-2 text-sm text-gray-500'>{action.description}</p>
      </div>
      <span
        className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
        aria-hidden='true'
      >
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
        </svg>
      </span>
    </div>
  );
};

export const LinksSection = () => {
  return (
    <div id='links-section' className='mb-8 text-center'>
      <div className='mt-8 text-xl tracking-tight text-gray-900 lg:text-xl'>
        <h3 className='mt-8 px-5 pb-4 text-xl font-bold tracking-tight text-gray-800 lg:px-5 lg:text-2xl'>
          Sitios útiles
        </h3>

        <div className='divide-y divide-gray-200 overflow-hidden  rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0'>
          {actions.map((action: LinkType, i: number) => (
            <Link key={i} action={action} actionIdx={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
