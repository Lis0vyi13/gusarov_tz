import { Meta, StoryObj } from "@storybook/react";

import InputGroup from "./InputGroup";

import Help from "../../icons/Help";
import Search from "../../icons/Search";
import Info from "../../icons/Info";

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {
    infoIcon: {
      control: "boolean",
    },
    iconBefore: {
      control: "boolean",
    },
    iconAfter: {
      control: "boolean",
    },
    width: { control: "text" },
  },
  render: (args) => (
    <InputGroup
      {...args}
      infoIcon={args.infoIcon ? <Info /> : undefined}
      iconBefore={args.iconBefore ? <Search /> : undefined}
      iconAfter={args.iconAfter ? <Help /> : undefined}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    label: "Username",
    inputId: "username",
    placeholder: "Enter your username",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    inputId: "email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone else.",
  },
};

export const WithErrorMessage: Story = {
  args: {
    label: "Password",
    inputId: "password",
    placeholder: "Enter your password",
    errorMessage: "Password must be at least 8 characters long.",
  },
};

export const RequiredField: Story = {
  args: {
    label: "First Name",
    inputId: "firstName",
    placeholder: "Enter your first name",
    required: true,
  },
};

export const OptionalField: Story = {
  args: {
    label: "Middle Name",
    inputId: "middleName",
    placeholder: "Enter your middle name (optional)",
    optional: true,
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    inputId: "search",
    placeholder: "Search...",
    iconBefore: <Search />,
    iconAfter: <Help />,
  },
};

export const WithInfoIcon: Story = {
  args: {
    label: "Phone Number",
    inputId: "phone",
    placeholder: "Enter your phone number",
    infoIcon: <Help />,
    infoIconVisibility: "always",
    tooltipText: "Your phone number",
  },
};

export const WithInfoIconOnHover: Story = {
  args: {
    label: "Address",
    inputId: "address",
    placeholder: "Enter your address",
    infoIcon: <Help />,
    infoIconVisibility: "hover",
    tooltipText: "Your phone number.",
  },
};

export const DisabledField: Story = {
  args: {
    label: "Country",
    inputId: "country",
    placeholder: "Enter your country",
    disabled: true,
  },
};

export const QuietVariant: Story = {
  args: {
    label: "Quiet Mode",
    inputId: "quietMode",
    placeholder: "Enter your input",
    quiet: true,
  },
};

export const SideLabelPosition: Story = {
  args: {
    label: "Number of tokens",
    inputId: "tokens",
    placeholder: "256",
    position: "side",
  },
};
