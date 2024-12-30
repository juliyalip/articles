import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import {routers} from '../../data/router/router'
import styles from './AppBar.module.scss'


export default function AppBar (){
    return (
        <div className={styles.container}>
            <Navigation navigationList={routers}/>
            <UserMenu/>
        </div>
    )
}