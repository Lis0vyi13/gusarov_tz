import { Meta, StoryObj } from "@storybook/react";

import InputAnnotation from "./InputAnnotation";

const meta: Meta<typeof InputAnnotation> = {
  component: InputAnnotation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputAnnotation>;

export const Default: Story = {
  args: { helperText: "This is some helpful text," },
};

export const ErrorMessage: Story = {
  args: {
    errorMessage: "This field is required.",
  },
};

export const Disabled: Story = {
  args: {
    helperText: "This is some helpful text, but the input is disabled.",
    disabled: true,
  },
};
