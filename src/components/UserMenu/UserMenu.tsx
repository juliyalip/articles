import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import styles from './UserMenu.module.scss'


export default function UserMenu(){
    const {user,  onLogout, isAuthorized} = useUserContext()

    return(
        <>
           {isAuthorized ? <div 
           className={styles.menuUser}>
            <div className={styles.greeting}>Wellcome {user?.name}</div> <Link to="/" onClick={onLogout} 
            className={styles.navLink}>Logout</Link></div>  : <div>
           <Link to="/register" className={styles.navLink}>register</Link>
           <Link to="/login"  className={styles.navLink}>login</Link>
           </div>}
        </>
    )
}
