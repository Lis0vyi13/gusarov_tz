import type { Meta, StoryObj } from "@storybook/react";

import InputText from "./InputText";

import Help from "../../icons/Help";
import Search from "../../icons/Search";

const meta: Meta<typeof InputText> = {
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    iconBefore: {
      control: "boolean",
    },
    iconAfter: {
      control: "boolean",
    },
    width: { control: "text" },
  },
  render: (args) => (
    <InputText
      {...args}
      iconBefore={args.iconBefore ? <Search /> : undefined}
      iconAfter={args.iconAfter ? <Help /> : undefined}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {},
};

export const SideAndAlignRight: Story = {
  args: {
    position: "side",
    alignment: "right",
  },
};

export const QuietWithShortcut: Story = {
  args: {
    quiet: true,
    shortkey: true,
  },
};
export const Outline: Story = {
  args: {
    variants: "outline",
  },
};
