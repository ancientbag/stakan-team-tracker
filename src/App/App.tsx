import { TaskCard } from '../Task/components';
import styles from './App.module.css';

export function App() {
    return (
        <section className={styles.container}>
            <TaskCard name="" description="" isCompleted={false} date={null} />
        </section>
    );
}
