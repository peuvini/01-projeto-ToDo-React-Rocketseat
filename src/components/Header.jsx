import styles from './Header.module.css'
import toDoLogo from '../images/Logo.svg'

export function Header(){
    return (
    <header className={styles.header}>
        <img src={toDoLogo} alt='Logotipo toDo'></img>
    </header>
    )
}