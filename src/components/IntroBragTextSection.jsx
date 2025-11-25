import MouseCircle from "./MouseCircle";
import GlowingStairs from "./GlowingStairs";

export default function IntroBragTextSection({bragText}){
    return(
        <>
        <MouseCircle textcontent={bragText} customClassNames={"introBragTextSection"}></MouseCircle>
        <GlowingStairs></GlowingStairs>
        </>
    )
}

