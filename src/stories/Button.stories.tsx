import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Atomic/Button",
  component: Button,
  args: { disabled: false, onClick: action("clicked") },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
  return <Button></Button>;
};

export const MainButton = Template.bind({});
MainButton.args = {};
