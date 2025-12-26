import { useState, type ReactNode } from 'react';
import CheckIcon from './assets/bx-check.svg?react';
import cn from 'classnames';

import styles from './Checkbox.module.css';

interface ICheckboxProps {
    className?: string;
    isChecked: boolean;
    onChange: (value: boolean) => void;
}

export const Checkbox = ({ className, isChecked, onChange }: ICheckboxProps): ReactNode => {
    const [_isChecked, setIsChecked] = useState(isChecked);

    const handleChange = (): void => {
        setIsChecked(prev => {
            onChange(!prev);
            return !prev;
        });
    };

    return (
        <button
            type="button"
            className={cn(styles.input, className, _isChecked && styles.checked)}
            onClick={handleChange}
        >
            <CheckIcon
                width="24px"
                height="24px"
                color="#FFFFFF"
                className={cn(styles.checkIcon, _isChecked && styles.checkIconVisible)}
            />
        </button>
    );
};
