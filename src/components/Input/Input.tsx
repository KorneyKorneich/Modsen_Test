import styles from './Input.module.scss'
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    setValue?: (value: string) => void; // Accept the input value as an argument
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
    return <input className={styles.input} {...rest} />;
};

export default Input;
