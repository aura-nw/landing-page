export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[url('../assets/images/img_bg_mask_mb.png')] lg:bg-[url('../assets/images/img_bg_gradient.png')] lg:bg-cover bg-no-repeat">
            {children}
        </div>

    );
}
