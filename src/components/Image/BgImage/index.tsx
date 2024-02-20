import Image from "next/image";
import { ComponentProps } from "react";

interface IBgImage extends ComponentProps<typeof Image> {
    alt: string;
}
function BgImage(props: IBgImage) {
    return (
        <Image
            {...props}
            className={`object-center object-cover pointer-events-none ${props.className}`}
            alt={props.alt}
        />);
}

export default BgImage;