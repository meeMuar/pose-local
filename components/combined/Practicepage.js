import Hone from "/components/Hone"
import Settingbutton from "/components/Settingbutton"
import practicestyles from "/styles/Practicepage.module.css"
import Image from "next/image"
const Practicepage = () => {

    return (
        <>

            <Hone
                name="Choose your settings" />
            <Settingbutton />
            <header className={practicestyles.example}>
                <button type="button" className={practicestyles.btn} > Start </button>
            </header>

            <Hone
                name="Example video" />

            <header className={practicestyles.example}>
                <div className={practicestyles.framing}>


                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/v-Ej9EIlfoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Hone
                    name="Example output" />
                <Image
                    src={"/example_img_full.png"}
                    alt={"example pic"}
                    width={1554}
                    height={1100}
                    priority /></header>
        </>
    )
}

export default Practicepage