import { Meta, StoryObj } from "@storybook/react";

import InputLabel from "./InputLabel";

import Help from "../../icons/Help";
import Info from "../../icons/Info";

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
  tags: ["autodocs"],
  argTypes: {
    infoIcon: {
      control: "boolean",
    },
  },
  render: (args) => <InputLabel {...args} infoIcon={args.infoIcon ? <Info /> : undefined} />,
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    label: "Username",
    htmlFor: "username",
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    htmlFor: "password",
    required: true,
  },
};

export const Optional: Story = {
  args: {
    label: "Email",
    htmlFor: "email",
    optional: true,
  },
};

export const WithInfoIconAlwaysVisible: Story = {
  args: {
    label: "Phone Number",
    htmlFor: "phone",
    infoIcon: <Help />,
    infoIconVisibility: "always",
    tooltipText: "Lorem ipsum dolor.",
  },
};

export const WithInfoIconOnHover: Story = {
  args: {
    label: "Address",
    htmlFor: "address",
    infoIcon: <Help />,
    infoIconVisibility: "hover",
    tooltipText: "Lorem ipsum dolor.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Country",
    htmlFor: "country",
    disabled: true,
  },
};

export const PositionSide: Story = {
  args: {
    label: "City",
    htmlFor: "city",
    position: "side",
  },
};

export const LargeLabel: Story = {
  args: {
    label: "Full Name",
    htmlFor: "fullName",
    size: 48,
  },
};

export const SmallLabel: Story = {
  args: {
    label: "Nickname",
    htmlFor: "nickname",
    size: 24,
  },
};
