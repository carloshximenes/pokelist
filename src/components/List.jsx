import styles from './List.module.css';

const List = ({ children }) => {
    return <div className={styles.list}>
        { children }
    </div>
}

export default List;