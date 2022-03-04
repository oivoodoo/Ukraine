import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
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

export const ShareButtonsSection = () => (
  <div className='my-10 space-x-4 text-center'>
    <FacebookShareButton
      url='https://ukraine-two.vercel.app'
      quote='Ukraine: Aquellos que quieran colaborar'
      hashtag='#ukraine'
    >
      <FacebookIcon size={28} round />
    </FacebookShareButton>
    <TelegramShareButton
      url='https://ukraine-two.vercel.app'
      title='Ukraine: Aquellos que quieran colaborar'
    >
      <TelegramIcon size={28} round />
    </TelegramShareButton>
    <WhatsappShareButton
      url='https://ukraine-two.vercel.app'
      title='Ukraine: Aquellos que quieran colaborar'
    >
      <WhatsappIcon size={28} round />
    </WhatsappShareButton>
    <TwitterShareButton
      url='https://ukraine-two.vercel.app'
      title='Ukraine: Aquellos que quieran colaborar'
    >
      <TwitterIcon size={28} round />
    </TwitterShareButton>
    <ViberShareButton
      url='https://ukraine-two.vercel.app'
      title='Ukraine: Aquellos que quieran colaborar'
    >
      <ViberIcon size={28} round />
    </ViberShareButton>
    <EmailShareButton
      url='https://ukraine-two.vercel.app'
      subject='Ukraine: Aquellos que quieran colaborar'
      body='Ukraine: Aquellos que quieran colaborar'
    >
      <EmailIcon size={28} round />
    </EmailShareButton>
  </div>
);
