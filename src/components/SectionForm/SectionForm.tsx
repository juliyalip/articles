import style from './SectionForm.module.scss'

interface IProps{
    name: string
    value: string;
    setValue: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
    type: "text "| "password"
}

export default function SectionForm({value, setValue, type, name}: IProps){
    return(
        <div className={style.sectionStyle}>
            <label htmlFor={name} className={style.label}>{name}</label>
            <input type={type} id={name} value={value} onChange={setValue} className={style.input}/>
        </div>
    )
}