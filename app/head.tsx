// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "PeaceLab Tutorials",
// };

export default function Head() {
    return (
        <>
            <title>Peacelab</title>
            <meta
                content='width=device-width, initial-scale=1'
                name='viewport'
            />
            <link rel='icon' href='/favicon.ico' />
        </>
    );
}
