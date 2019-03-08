import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import ContentBlock from '../ContentBlock';
import { images, imageAlignments, textAlignments } from '../../../test/constants';

storiesOf('Constellations|ContentBlock', module)
  .add('With image on right', () => (
    <ContentBlock
      background={boolean('Background', false, 'ContentBlock')}
      body={text(
        'body',
        'We are a LGBT league that’s also open to straight allies. We don’t have a maximum of how many people you can have on your team. You must have at least 7 people present 15 minutes before your scheduled start time in order to play.',
        'ContentBlock',
      )}
      headline={text('headline', 'Team Dynamics', 'ContentBlock')}
      image={{
        src: select(
          'src',
          images,
          '//images.ctfassets.net/8wpi5cmhr3lg/2st4Tarcs6i1sDh179cHrT/3dc3fca955cf57417e4195c2a4d09c03/Team_Dynamics.png',
          'Image',
        ),
        alt: text('alt', 'Team celebrating victory', 'Image'),
      }}
      imageAlign={select('imageAlign', imageAlignments, 'right', 'ContentBlock')}
      textAlign={select('textAlign', textAlignments, 'left', 'ContentBlock')}
    />
  ))
  .add('With image on left', () => (
    <ContentBlock
      background={boolean('Background', true, 'ContentBlock')}
      body={text(
        'body',
        'The MDFFL is a Metro Detroit based flag football league for LGBT friendly players for recreational and skill development purposes. The league is to promote the growth of the LGBTQ+ community and LGBTQ+ friendly players through football. We pursue these goals by providing a venue for the play of football where we encourage players of all levels to participate and improve through practices and pick-up play.',
        'ContentBlock',
      )}
      headline={text('headline', 'About Us', 'ContentBlock')}
      image={{
        src: select(
          'src',
          images,
          '//images.ctfassets.net/8wpi5cmhr3lg/1n0TZGOHyEuCdYH5bXDlSJ/a076437829dacd40410c9599d53b5e96/About_Us.png',
          'Image',
        ),
        alt: text('alt', 'Players walking', 'Image'),
      }}
      imageAlign={select('imageAlign', imageAlignments, 'left', 'ContentBlock')}
      textAlign={select('textAlign', textAlignments, 'left', 'ContentBlock')}
    />
  ))
  .add('With a cta', () => (
    <ContentBlock
      background={boolean('Background', true, 'ContentBlock')}
      body={text(
        'body',
        'We are a LGBT friendly league. It’s a very competitive league so bring your A-game.',
        'ContentBlock',
      )}
      headline={text('headline', 'About Us', 'ContentBlock')}
      image={{
        src: select(
          'src',
          images,
          '//images.ctfassets.net/8wpi5cmhr3lg/6mW6Tsx5scOYMwocwSskKq/f6222cdd29472f569283df0d4ca0f348/About_Us_Picture.png',
          'Image',
        ),
        alt: text('alt', 'Dinosaur mascot on field during warmups', 'Image'),
      }}
      imageAlign={select('imageAlign', imageAlignments, 'left', 'ContentBlock')}
      textAlign={select('textAlign', textAlignments, 'left', 'ContentBlock')}
      cta={{
        href: text('href', 'https://www.mdffl.org/about', 'CTA'),
        children: text('children', 'LEARN MORE', 'CTA'),
        external: boolean('external', true, 'CTA'),
      }}
    />
  ))
  .add('Without image', () => (
    <ContentBlock
      body={text(
        'body',
        'The Metro Detroit Flag Football League (MDFFL) is an LGBT and straight allied flag football league, changing preconceived societal beliefs about sexual orientation and self-identification.',
        'ContentBlock',
      )}
      headline={text('headline', 'Mission Statement', 'ContentBlock')}
      textAlign={select('textAlign', textAlignments, 'center', 'ContentBlock')}
    />
  ));
