import clsx from "clsx";

import styles from "./InputAnnotation.module.css";

interface InputAnnotationProps {
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  darkMode?: boolean;
}

const InputAnnotation = ({
  helperText,
  errorMessage,
  disabled,
  darkMode,
}: InputAnnotationProps) => {
  const inputAnnotationClassName = clsx(styles.helperText, {
    [styles.error]: errorMessage,
    [styles.disabled]: disabled,
    "dark-mode": darkMode,
  });
  return <small className={inputAnnotationClassName}>{errorMessage || helperText}</small>;
};

export default InputAnnotation;
