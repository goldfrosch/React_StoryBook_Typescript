import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading1 from "./components/loading1";

export default {
  title: "Loading1",
  component: Loading1,
} as ComponentMeta<typeof Loading1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loading1> = args => (
  <Loading1 {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  maxNum: 7,
  gradiant: "low",
  margin: "low",
};

export const Secondary = Template.bind({});
Secondary.args = {
  maxNum: 8,
  gradiant: "high",
  margin: "low",
};
