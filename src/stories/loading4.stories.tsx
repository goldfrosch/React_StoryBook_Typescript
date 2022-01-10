import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading4 from "./components/loading4";

export default {
  title: "Loading4",
  component: Loading4,
} as ComponentMeta<typeof Loading4>;

const Template: ComponentStory<typeof Loading4> = args => (
  <Loading4 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: "m",
  duration: 0.5,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "l",
  duration: 1,
};
