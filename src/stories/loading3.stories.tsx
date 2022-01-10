import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading3 from "./components/loading3";

export default {
  title: "Loading3",
  component: Loading3,
} as ComponentMeta<typeof Loading3>;

const Template: ComponentStory<typeof Loading3> = args => (
  <Loading3 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  length: 4,
};

export const Secondary = Template.bind({});
Secondary.args = {
  length: 5,
};
