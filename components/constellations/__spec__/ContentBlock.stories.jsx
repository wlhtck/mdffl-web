import React from 'react';
import { storiesOf } from '@storybook/react';
import ContentBlock from '../ContentBlock';

storiesOf('ContentBlock', module)
  .add('With image on right', () => (
    <ContentBlock
      body="
      We are a LGBT league that’s also open to straight allies. We don’t have a maximum of how many
      people you can have on your team. You must have at least 7 people present 15 minutes before
      your scheduled start time in order to play.
      "
      headline="About Us"
      image={{
        src: '//images.ctfassets.net/8wpi5cmhr3lg/2st4Tarcs6i1sDh179cHrT/3dc3fca955cf57417e4195c2a4d09c03/Team_Dynamics.png',
        alt: 'Team celebrating victory',
      }}
    />
  ))
  .add('With image on left', () => (
    <ContentBlock
      background
      body="
      The MDFFL is a Metro Detroit based flag football league for LGBT friendly players for
      recreational and skill development purposes. The league is to promote the growth of the LGBTQ+
      community and LGBTQ+ friendly players through football. We pursue these goals by providing a
      venue for the play of football where we encourage players of all levels to participate and
      improve through practices and pick-up play.
      "
      headline="About Us"
      image={{
        src: '//images.ctfassets.net/8wpi5cmhr3lg/1n0TZGOHyEuCdYH5bXDlSJ/a076437829dacd40410c9599d53b5e96/About_Us.png',
        alt: 'Players walking',
      }}
      imageAlign="left"
    />
  ))
  .add('With a cta', () => (
    <ContentBlock
      background
      body="We are a LGBT friendly league. It’s a very competitive league so bring your A-game."
      headline="About Us"
      image={{
        src: '//images.ctfassets.net/8wpi5cmhr3lg/6mW6Tsx5scOYMwocwSskKq/f6222cdd29472f569283df0d4ca0f348/About_Us_Picture.png',
        alt: 'Dinosaur mascot on field during warmups',
      }}
      imageAlign="left"
      cta={{
        href: 'https://www.mdffl.org/about',
        children: 'LEARN MORE',
        external: true,
      }}
    />
  ))
  .add('Without image', () => (
    <ContentBlock
      body="
      The Metro Detroit Flag Football League (MDFFL) is an LGBT and straight allied flag football
      league, changing preconceived societal beliefs about sexual orientation and
      self-identification.
      "
      headline="Mission Statement"
      textAlign="center"
    />
  ));
