"use client";
// import Image from "next/image";
import "../styles/globals.css";

import Link from "next/link";
import { type FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

const footerLinks = {
    "https://peacelab.org": "Peace Lab official website",
    "https://github.com/pixegami/nextjs-blog-tutorial":
        "Designed by Pixegami",
    "https://axu5.vercel.app/": "Tutorials by Aleksanteri Aho",
    "https://github.com/axu5/peacelab":
        "Contribute some tutorials here!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (
            searchRef.current == undefined ||
            searchRef.current.value == undefined
        )
            return;
        // console.log(searchRef.current.value);
        router.push(
            `/search?q=${encodeURIComponent(searchRef.current.value)}`
        );
    }

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
            <div className='xl:absolute xl:top-0 xl:right-0 pb-5'>
                <form
                    className='flex flex-col mt-5'
                    onSubmit={handleSearch}>
                    <input
                        className='rounded-t w-full px-5 py-2 bg-slate-200 xl:w-[25vw]'
                        ref={searchRef}
                        id='search-string'
                        type='text'
                        placeholder='Search for something'
                    />
                    <input
                        className='rounded-b hover:cursor-pointer bg-slate-400 px-5 py-2'
                        value='Search!'
                        type='submit'
                    />
                </form>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <div className='border-t border-slate-400 mt-12 py-6 text-center text-slate-500'>
                {Object.entries(footerLinks).map(
                    ([link, name], i) => {
                        return (
                            <h3 key={i}>
                                <Link
                                    target='_blank'
                                    href={link}
                                    className='hover:underline'>
                                    {name}
                                </Link>
                            </h3>
                        );
                    }
                )}
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
                <Analytics />
            </body>
        </html>
    );
}
