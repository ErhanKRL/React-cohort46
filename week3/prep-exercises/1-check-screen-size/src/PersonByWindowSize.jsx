import { RandomHead, MITHI, DIANA, MIKONG } from "./big-head";
import { MdTabletMac, MdLaptopMac, MdDesktopMac } from "react-icons/md";
import { BigHeadMessage } from "./helpers"
import { useWithinWindowWidth } from "./hooks"

const POSSIBLE_STATES = {
    small: { name: "Mikong", size: "small", icon: <MdTabletMac /> },
    medium: { name: "Diana", size: "medium", icon: <MdLaptopMac /> },
    big: { name: "Mithi", size: "big", icon: <MdDesktopMac /> },
}

function PersonByWindowSize() {
    const isBig = useWithinWindowWidth(1000, Infinity)
    const isMedium = useWithinWindowWidth(700, 999)
    const isSmall = useWithinWindowWidth(0, 699)

    let person = null
    let state = null
    if (isBig) {
        person = <RandomHead person={MITHI} />
        state = POSSIBLE_STATES.big
    } else if (isMedium) {
        person = <RandomHead person={DIANA} />
        state = POSSIBLE_STATES.medium
    } else if (isSmall) {
        person = <RandomHead person={MIKONG} />
        state = POSSIBLE_STATES.small
    }

    return (
        <div>
            {person}
            <BigHeadMessage {...{ state }} />
        </div>
    )
}

export { PersonByWindowSize }