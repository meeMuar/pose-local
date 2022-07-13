import settingstyles from "../styles/Settingbutton.module.css"
const Settingbutton = (props) => {

    return (
        <>
            <div className={settingstyles.links}>
                <button className={settingstyles.first} type="button">Male</button>
                <button className={settingstyles.second} type="button">Female</button>
                <button className={settingstyles.third} type="button">Naked</button>
                <button className={settingstyles.fourth} type="button">All</button>
                <button className={settingstyles.fifth} type="button">30</button>
                <button className={settingstyles.sixth} type="button">60</button>
                <button className={settingstyles.seventh} type="button">Unlimited</button>
                <button className={settingstyles.eighth} type="button">Custom</button>

            </div>
        </>
    )
}

export default Settingbutton