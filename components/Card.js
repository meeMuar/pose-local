import cardstyles from '../styles/Card.module.css'
const Card = (props) => {

    return (

        <div className={cardstyles.gridlike}>

            <div style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>
                <header >
                    <h1 >{props.name}</h1>
                    <p >
                        {props.desc}
                    </p>
                    <a href="/">Tag</a>
                </header>
            </div>

        </div >
    )
}

export default Card