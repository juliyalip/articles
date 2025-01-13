import style from './SectionForm.module.scss'

interface IProps{
    name: string
    value: string;
    label: string;
    setValue: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
    type: "text"| "password";
    onBlur?: (e:  React.ChangeEvent<HTMLInputElement>) =>void
}

export default function SectionForm({value, setValue, type, name, onBlur, label}: IProps){
    return(
        <div className={style.sectionStyle}>
            <label htmlFor={name} className={style.label}>{label}</label>
            <input type={type} id={name} value={value} onChange={setValue} onBlur={onBlur} className={style.input}/>
        </div>
    )
}