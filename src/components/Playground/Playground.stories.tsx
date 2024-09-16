import { Meta, StoryFn, StoryObj } from "@storybook/react";

import InputGroup from "../InputGroup/InputGroup";
import Search from "../../icons/Search";
import Help from "../../icons/Help";
import Info from "../../icons/Info";

import "../../index.css";

type FlexProps = React.HTMLAttributes<HTMLDivElement>;

const Flex = (props: FlexProps) => {
  return (
    <div {...props} style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }} />
  );
};

const withColorScheme = (Story: StoryFn) => {
  return (
    <div>
      <Flex>
        <Story />
      </Flex>
      <Flex className="dark-mode">
        <Story />
      </Flex>
    </div>
  );
};

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  tags: ["autodocs"],
  decorators: [withColorScheme],
  argTypes: {
    label: { control: "text" },
    inputId: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    errorMessage: { control: "text" },
    iconBefore: { control: "boolean" },
    iconAfter: { control: "boolean" },
    optional: { control: "boolean" },
    infoIcon: { control: "boolean" },
    infoIconVisibility: { control: "radio", options: ["always", "hover"] },
    tooltipText: { control: "text" },
    position: { control: "radio", options: ["top", "side"] },
    fieldSize: { control: "radio", options: [24, 32, 36, 40, 44, 48] },
    quiet: { control: "boolean" },
    variants: { control: "radio", options: ["fill", "outline"] },
    alignment: { control: "radio", options: ["left", "right"] },
    shortkey: { control: "boolean" },
    width: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    label: "Email",
    inputId: "Email",
    iconBefore: true,
    iconAfter: true,
    shortkey: true,
    infoIcon: true,
    helperText: "This is a hint text to help user.",
    tooltipText: "This is a hint text to help user.",
    required: false,
    disabled: false,
    fieldSize: 36,
    position: "top",
  },

  render: (args) => (
    <InputGroup
      {...args}
      iconBefore={args.iconBefore ? <Search /> : undefined}
      iconAfter={args.iconAfter ? <Help /> : undefined}
      infoIcon={args.infoIcon ? <Info /> : undefined}
    />
  ),
};
