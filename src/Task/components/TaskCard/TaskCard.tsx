import { useState, type ReactNode } from 'react';
import { Checkbox } from '../../../Common/components';
import BoxIcon from './assets/bx-box.svg?react';

import type { ITask } from '../../domain/task';
import styles from './TaskCard.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ITaskProps extends ITask {
    // onChange: (data: Partial<ITask>) => void;
}

export const TaskCard = ({ name, description, isCompleted }: ITaskProps): ReactNode => {
    const [_name, setName] = useState(name);
    const [_description, setDescription] = useState(description);
    const [_isCompleted, setIsCompleted] = useState(isCompleted);

    const [dateRange, setDateRange] = useState<'single' | 'multiple'>('single');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(e.target.value);
    };

    const handleDateRangeChange = (value: 'single' | 'multiple'): void => {
        setDateRange(value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Checkbox isChecked={_isCompleted} className={styles.checkboxInput} onChange={setIsCompleted} />

                <div className={styles.cardDescription}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Название"
                        className={styles.textInput}
                        value={_name}
                        onChange={handleNameChange}
                        autoComplete="off"
                    />
                    <textarea
                        name="description"
                        placeholder="Описание"
                        className={styles.textArea}
                        value={_description}
                        onChange={handleDescriptionChange}
                        autoComplete="off"
                    />
                </div>

                <button type="button" className={styles.addToProjectButton} title="Добавить в проект">
                    <BoxIcon />
                </button>
            </div>

            <footer className={styles.footer}>
                <div className={styles.right}>
                    <div className={styles.radioInput}>
                        <input
                            type="radio"
                            name="range"
                            value="single"
                            checked={dateRange === 'single'}
                            onClick={() => {
                                handleDateRangeChange('single');
                            }}
                        />

                        <label
                            htmlFor="single"
                            onClick={() => {
                                handleDateRangeChange('single');
                            }}
                        >
                            В конкретный день
                        </label>
                    </div>
                    <div className={styles.radioInput}>
                        <input
                            type="radio"
                            name="range"
                            value="multiple"
                            checked={dateRange === 'multiple'}
                            onClick={() => {
                                handleDateRangeChange('multiple');
                            }}
                        />
                        <label
                            htmlFor="multiple"
                            onClick={() => {
                                handleDateRangeChange('multiple');
                            }}
                        >
                            Промежуток времени
                        </label>
                    </div>
                    <input type="date" className={styles.date} />
                    {dateRange === 'multiple' && <input type="date" className={styles.date} />}
                </div>
            </footer>
        </div>
    );
};
