import honestyles from '../styles/Hone.module.css'

const Hone = (props) => {
    return (
        <div>
            <h1 className={honestyles.title}>{props.name}</h1>
        </div>
    )

}

export default Hone