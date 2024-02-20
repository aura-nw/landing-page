'use client'

import Image from "next/image";
import { ComponentProps, useState } from "react";

interface IBlurImage extends ComponentProps<typeof Image> {
    alt: string;
}
function BlurImage(props: IBlurImage) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    return (
        <Image
            {...props}
            style={{ width: '100%', height: '100%' }}
            alt={props.alt}
            className={`${props.className} duration-700 ease-in-out ${isLoading ? 'grayscale blur-xl' : 'grayscale-0 blur-0'}`}
            onLoad={() => { setIsLoading(false) }}
        />
    );
}

export default BlurImage;