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
      <Flex className="bg-black">
        <Story darkMode={true} />
      </Flex>
    </div>
  );
};

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  tags: ["autodocs"],
  decorators: [withColorScheme],
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

  render: (args, { darkMode }) => (
    <InputGroup
      {...args}
      darkMode={darkMode}
      iconBefore={args.iconBefore ? <Search /> : undefined}
      iconAfter={args.iconAfter ? <Help /> : undefined}
      infoIcon={args.infoIcon ? <Info /> : undefined}
    />
  ),
};
