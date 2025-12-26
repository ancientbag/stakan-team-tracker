import { useState, type ReactNode } from 'react';
import cn from 'classnames';
import { Checkbox } from '../../../Common/components';
//@ts-expect-error navernoe eto infraerror
import BoxIcon from './assets/bx-box.svg?react';

import type { ITask } from '../../domain/task';
import styles from './TaskCard.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ITaskProps extends ITask {}

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
                    <div className={styles.segmentContainer}>
                        <button
                            className={cn(styles.segmentButton, dateRange === 'single' && styles.segmentButtonPressed)}
                            onClick={() => {
                                handleDateRangeChange('single');
                            }}
                        >
                            В конкретный день
                        </button>

                        <button
                            className={cn(
                                styles.segmentButton,
                                dateRange === 'multiple' && styles.segmentButtonPressed
                            )}
                            onClick={() => {
                                handleDateRangeChange('multiple');
                            }}
                        >
                            Промежуток
                        </button>
                    </div>

                    <div className={styles.dateRow}>
                        {dateRange === 'multiple' && <div>С</div>}
                        <input type="date" className={styles.date} />
                    </div>
                    {dateRange === 'multiple' && (
                        <div className={styles.dateRow}>
                            <div>По</div>
                            <input type="date" className={styles.date} />
                        </div>
                    )}
                </div>
            </footer>
        </div>
    );
};
