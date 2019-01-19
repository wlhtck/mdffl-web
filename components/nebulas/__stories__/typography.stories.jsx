import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import { Headline, FeatureHeadline, BodyCopy } from '../Typography';
import { black } from '../colors';

storiesOf('Nebulas')
  .add('Typography', () => (
    <div>
      <Box color={black}>
        <Headline>Headline</Headline>
        <BodyCopy inverted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec magna enim. Aenean
          consectetur massa id justo porttitor laoreet. Ut iaculis ante a ipsum tincidunt, sed
          dapibus elit interdum. Sed ac condimentum tellus. Cras semper in turpis eu finibus.
          Pellentesque vitae nisi quis quam posuere rutrum. Suspendisse scelerisque quam nibh,
          vel fringilla diam fringilla at. Morbi pretium fermentum erat, vel cursus ipsum ultrices
          a. Vivamus porttitor ipsum vel quam ornare, eu dignissim dui vulputate. Maecenas commodo,
          erat eu scelerisque semper, ante odio porta quam, non porta enim mauris ut eros. Cras
          egestas ultrices odio, in finibus justo consectetur id. Phasellus justo nulla, maximus non
          vulputate eu, lacinia id eros. Aliquam a tellus lectus.
        </BodyCopy>
      </Box>
      <Box>
        <FeatureHeadline>Feature Headline</FeatureHeadline>
        <BodyCopy>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis lorem at mi pretium
          blandit. In ac lectus quis nibh venenatis lacinia. Nam et dolor libero. Integer eu metus a
          quam consequat vehicula eu id elit. Etiam sagittis ultricies porttitor. Morbi neque arcu,
          varius non tempus at, luctus feugiat augue. Integer purus elit, blandit et ante non,
          pharetra maximus sapien. Ut pharetra dignissim lacus, et hendrerit elit pulvinar nec.
          Donec porta, metus in porta sollicitudin, sem ante tristique leo, ut aliquam enim lorem
          sit amet massa. Nam eu mauris eget nunc mollis tincidunt. Mauris a hendrerit nisl. Etiam
          placerat, risus at mattis imperdiet, ipsum mauris imperdiet augue, sed sollicitudin metus
          leo et felis. Aliquam porttitor porta metus, ut dignissim elit suscipit ac.
        </BodyCopy>
      </Box>
    </div>
  ));
