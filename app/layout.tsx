// import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const header = (
        <header>
            <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
                {/* <Image
                    src='/logo.png'
                    width={40}
                    height={40}
                    className='mx-auto'
                    alt={"logo"}
                /> */}
                <Link href='/'>
                    <h1 className='text-2xl text-white font-bold mt-4'>
                        PeaceLab
                    </h1>
                </Link>
                <p className='text-slate-300'>
                    Peacelab computer tutorial
                </p>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <div className='border-t border-slate-400 mt-12 py-6 text-center text-slate-400'>
                <h3>
                    <Link
                        target='_blank'
                        href='https://peacelab.org'
                        className='hover:underline'>
                        Peace Lab official website
                    </Link>
                </h3>
                <h3>
                    <Link
                        target='_blank'
                        href='https://github.com/pixegami/nextjs-blog-tutorial'
                        className='hover:underline'>
                        Designed by Pixegami
                    </Link>
                </h3>
            </div>
        </footer>
    );

    return (
        <html>
            {/* <head></head> */}
            <body>
                <div className='mx-auto max-w-2xl px-6'>
                    {header}
                    {children}
                    {footer}
                </div>
            </body>
        </html>
    );
}
