import firststyles from "/styles/Firstpage.module.css"
import Card from "/components/Card";
import Hone from "/components/Hone";

const Firstpage = () => {
    return (
        <>
            <Hone
                name="Available Subjects" />
            <div className={firststyles.grid}>
                <Card
                    name="Figure"
                    desc="Usually a female with a bit of charm"
                    image='/card_figure_crop.png'
                />

                <Card
                    name="Expression"
                    desc="A way to stop drawing girls with a closed mouth"
                    image='/card_expression_crop.png'


                />
                <Card
                    name="Anatomy"
                    desc="an old time a question: is pelvis a bucket? "
                    image='/card_anatomy_crop.png'


                />
                <Card
                    name="Scene"
                    desc="graduating from the first 2 years of being an anime artist "
                    image='/card_scene_crop.png'


                />
            </div>

        </>
    )

}

export default Firstpage