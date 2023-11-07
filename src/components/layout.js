import { useMediaQuery } from "react-responsive";


export function IsMobile() {
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1224px )" });
    const isMobile = useMediaQuery({ query: "(max-width: 620px)" });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

    return isMobile?isMobile:false;
}
