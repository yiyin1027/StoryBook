import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: '#f00'},
        {name: 'green', value: '#0f0'}
      ]
    }
  },
  decorators: [(Story) => <div style={{border: '3px', margin: '3em'}}><Story /></div>],
  argTypes: {
    primary: true,
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click me',
};

Primary.parameters = {
  background: {
    values: [
      {name: 'red', value: '#f00'},
      {name: 'green', value: '#0f0'}
    ]
  }
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
