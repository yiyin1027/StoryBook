import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Page',
  component: Page,
};

// const Template = (args) => <Page {...args} />;

const Template = (args, {argTypes}) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
)

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

export const CustomerFooter = Template.bind({});
CustomerFooter.args = {
  footer: 'Built with Storybook',
}
