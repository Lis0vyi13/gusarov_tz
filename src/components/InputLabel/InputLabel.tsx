import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./InputLabel.module.css";

interface InputLabelProps {
  label: string;
  htmlFor: string;
  infoIcon?: ReactNode;
  infoIconVisibility?: "always" | "hover";
  tooltipText?: string;
  required?: boolean;
  disabled?: boolean;
  optional?: boolean;
  position?: "top" | "side";
  size?: 24 | 32 | 36 | 40 | 44 | 48;
  darkMode?: boolean;
}

const labelSizes = {
  24: styles.medium,
  32: styles.medium,
  36: styles.medium,
  40: styles.large,
  44: styles.large,
  48: styles.large,
};

const InputLabel = ({
  label,
  htmlFor,
  infoIcon,
  infoIconVisibility = "always",
  tooltipText,
  required = false,
  disabled = false,
  optional = false,
  position = "top",
  darkMode,
  size = 36,
}: InputLabelProps) => {
  const labelWrapperClassName = clsx(styles.labelWrapper, styles[position]);

  const infoIconClassName = clsx(styles.infoIcon, {
    [styles.infoIconHover]: infoIconVisibility === "hover",
  });

  const labelClassName = clsx(styles.label, labelSizes[size], {
    [styles.labelDisabled]: disabled,
    "dark-mode": darkMode,
  });

  return (
    <div className={labelWrapperClassName}>
      <label className={labelClassName} htmlFor={htmlFor}>
        {label}&nbsp;
        {optional && <span className={styles.optionalLabel}>(optional)&nbsp;</span>}
        {required && (
          <span title="Input field is required!" className={styles.requiredAsterisk}>
            *&nbsp;
          </span>
        )}
      </label>
      {infoIcon && (
        <div className={infoIconClassName}>
          {infoIcon}
          {tooltipText && (
            <div className={styles.tooltip}>
              {tooltipText}
              <div className={styles.tooltipArrow}></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputLabel;
