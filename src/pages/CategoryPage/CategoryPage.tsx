import  {useState, useEffect} from 'react'
import { useLocation , Link} from 'react-router-dom'
import { EditIcon } from '../../images/icon/EditIcon'
import { BinIcon } from '../../images/icon/binIcon'
import { ICategory } from '../../interfaces/articles';
import { getAllCategories } from '../../service-api/categories-api'


export default function CategoryPage(){
const [countries, setCountries] = useState<ICategory[]>([])

useEffect(() =>{
const getCountries = async()=>{
    const countries = await getAllCategories()
 setCountries(countries)
};  getCountries()
}, [])

    let location = useLocation()

    console.log(location)
    return(
        <div>
            <h1>Countries</h1>
            <ul>
                {countries.map(({url, title,_id}) => (
                    <li key={_id}>
                        <Link to={`${url}`}>{title}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <Link to={`/edit`}>
                <EditIcon />
                </Link>
                <BinIcon />
            </div>


        </div>
    )

}