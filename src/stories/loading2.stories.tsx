import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading2 from "./components/loading2";

export default {
  title: "Loading2",
  component: Loading2,
} as ComponentMeta<typeof Loading2>;

const Template: ComponentStory<typeof Loading2> = args => (
  <Loading2 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  maxNum: 7,
};

export const Secondary = Template.bind({});
Secondary.args = {
  maxNum: 8,
};
