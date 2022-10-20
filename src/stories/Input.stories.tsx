import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "../components/Input";

export default {
  title: "Atomic/Input",
  component: Input,
  args: { disabled: false, onClick: action("clicked") },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ children }) => {
  return <Input>{children}</Input>;
};

export const MainInput = Template.bind({});
MainInput.args = {
  children: "inputzinho",
};
