import React from 'react';

import Cta from '../cta';

export default {
  title: 'Example/Cta',
  component: Cta,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Cta {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Cta',
};