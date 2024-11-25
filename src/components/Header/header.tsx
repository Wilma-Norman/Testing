import styles from './Header.module.css'
import SubTitle from '../SubTitle/subtitle'

const Header = () => {
    return(
        <header data-testid="header" className={styles.headerContainer}>
            <h1 className={styles.headertext}>Task List</h1>
            <h4 data-testid="firstSubtitle">Write a task so you dont forget it!</h4>
            <SubTitle text="Here you can organise your day to day life!"/>
        </header>
    )
}

export default Header