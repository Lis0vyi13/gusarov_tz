import { InputHTMLAttributes, ReactNode } from "react";

import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";
import InputAnnotation from "../InputAnnotation/InputAnnotation";

import styles from "./InputGroup.module.css";
import clsx from "clsx";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputId: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  optional?: boolean;
  infoIcon?: ReactNode;
  infoIconVisibility?: "always" | "hover";
  tooltipText?: string;
  position?: "top" | "side";
  fieldSize?: 24 | 32 | 36 | 40 | 44 | 48;
  quiet?: boolean;
  variants?: "fill" | "outline";
  alignment?: "left" | "right";
  shortkey?: boolean;
  width?: number | string;
  darkMode?: boolean;
}

const InputGroup = ({
  label,
  inputId,
  placeholder = "Input...",
  helperText = "",
  errorMessage = "",
  iconBefore = null,
  iconAfter = null,
  infoIcon = null,
  infoIconVisibility = "always",
  tooltipText = "",
  optional = false,
  position = "top",
  quiet = false,
  variants = "fill",
  fieldSize = 36,
  alignment = "left",
  shortkey = false,
  darkMode,
  width = "323px",
  ...props
}: InputGroupProps) => {
  const { required, disabled } = { ...props };
  const formattedWidth = typeof width === "number" ? width + "px" : width;

  const inputGroupClassName = clsx(styles.inputGroup, {
    "dark-mode": darkMode,
  });

  const inputGroupContainerClassName = clsx(
    styles.inputGroupContainer,
    styles[`label-${position}`],
  );

  return (
    <div style={{ width: formattedWidth }} className={inputGroupClassName}>
      <div className={inputGroupContainerClassName}>
        <InputLabel
          label={label}
          htmlFor={inputId}
          infoIcon={infoIcon}
          infoIconVisibility={infoIconVisibility}
          tooltipText={tooltipText}
          position={position}
          size={fieldSize}
          required={required}
          disabled={disabled}
          optional={optional}
        />

        <InputText
          id={inputId}
          placeholder={placeholder}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          inputSize={fieldSize}
          position={position}
          quiet={quiet}
          variants={variants}
          alignment={alignment}
          shortkey={shortkey}
          width={formattedWidth}
          {...props}
        />
      </div>
      {(helperText || errorMessage) && (
        <InputAnnotation disabled={disabled} errorMessage={errorMessage} helperText={helperText} />
      )}
    </div>
  );
};

export default InputGroup;
