import clsx from "clsx";

import styles from "./InputAnnotation.module.css";

interface InputAnnotationProps {
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const InputAnnotation = ({ helperText, errorMessage, disabled }: InputAnnotationProps) => {
  const inputAnnotationClassName = clsx(
    styles.helperText,
    { [styles.error]: errorMessage },
    { [styles.disabled]: disabled },
  );
  return <small className={inputAnnotationClassName}>{errorMessage || helperText}</small>;
};

export default InputAnnotation;
