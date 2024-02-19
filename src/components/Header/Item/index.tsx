'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import ic_arrow from "@/assets/icons/ic_arrow.svg";
import { PAGE_ROUTE } from "@/common"


const Item = ({ children, path, subItems }: { children: ReactNode, path?: string, subItems?: any }) => {
    const pathname = usePathname()

    if (subItems) {
        const listPaths = subItems.map((e: any) => e.pageRoute)
        const isActive = listPaths.includes(pathname.slice(0, -1))

        return (
            <div className="flex justify-center items-center">
                <div className={`group relative px-6 py-3 hover:bg-medium-charcoal ${isActive ? 'bg-medium-charcoal' : ''} rounded-2xl cursor-pointer`}>
                    <div className="flex items-center gap-[10px]">
                        <span className="text-lg">
                            {children}
                        </span>
                        <Image className="group-hover:rotate-180 transition duration-200 ease-in" src={ic_arrow} alt="ic_arrow" />
                    </div>
                    <div className="group-hover:block absolute hidden h-auto left-0 z-[1]">
                        <div className="pt-5">
                            <ul className="w-[175px] bg-medium-charcoal shadow rounded-2xl p-1">
                                {subItems.map((item: any, idx: number) => (
                                    <Link href={item.pageRoute ?? item.link} target={item.pageRoute ? "_self" : "_blank"} key={idx} className="px-6 py-4 flex items-center hover:bg-light-charcoal rounded-2xl gap-[10px]">
                                        {item?.icon && <Image className="w-5 h-5" src={item.icon} alt={item.name} />}
                                        <span className="block">{item.name}</span>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center">
            <Link href={path ?? PAGE_ROUTE.HOME} className={`w-24 px-6 py-3 hover:bg-medium-charcoal ${(pathname === PAGE_ROUTE.HOME ? pathname : pathname.slice(0, -1)) === path ? 'bg-medium-charcoal' : ''} rounded-2xl text-lg flex justify-center items-center`}>{children}</Link>
        </div>
    )

}

export default Item