import { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import styles from "./InputText.module.css";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  position?: "side" | "top";
  inputSize?: 24 | 32 | 36 | 40 | 44 | 48;
  quiet?: boolean;
  variants?: "fill" | "outline";
  alignment?: "left" | "right";
  shortkey?: boolean;
  width?: string;
  darkMode?: boolean;
}

const inputSizes = {
  24: styles.xxs,
  32: styles.xs,
  36: styles.md,
  40: styles.lg,
  44: styles.xl,
  48: styles.xxl,
};

const InputText = ({
  iconBefore,
  iconAfter,
  position = "top",
  inputSize = 36,
  quiet,
  variants = "fill",
  alignment = "left",
  placeholder = "Enter text...",
  shortkey,
  darkMode,
  width = "323px",
  ...props
}: InputTextProps) => {
  const inputWrapperClassName = clsx(styles.inputWrapper, {
    [styles.sideInputWrapper]: position === "side",
    "dark-mode": darkMode,
  });

  const SIDE_INPUT_WIDTH = "64px";

  const inputClassName = clsx(
    styles.input,
    inputSizes[inputSize],
    styles[variants],
    styles[alignment],
    {
      [styles.quiet]: quiet,
      [styles.hasIconBefore]: iconBefore,
      [styles.hasIconAfter]: iconAfter,
      [styles.sideInput]: position === "side",
      [styles.hasShortkey]: shortkey,
      [styles.hasShortkeyAndAfterIcon]: shortkey && iconAfter,
    },
  );

  return (
    <div
      style={{ width: position === "top" ? width : SIDE_INPUT_WIDTH }}
      className={inputWrapperClassName}
    >
      <div className={styles.inputContainer}>
        <input placeholder={placeholder} className={inputClassName} {...props} />
        <div className={styles.iconBeforeWrapper}>
          {iconBefore && <span className={styles.iconBefore}>{iconBefore}</span>}
        </div>
        <div className={styles.iconsAfterWrapper}>
          {iconAfter && <span className={styles.iconAfter}>{iconAfter}</span>}
          {shortkey && <span className={styles.shortkey}>⌘K</span>}
        </div>
      </div>
    </div>
  );
};

export default InputText;
