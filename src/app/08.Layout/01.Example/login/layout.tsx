import Link from "next/link";
import { ReactNode } from "react";

const Layout = ( { children }: { children: ReactNode } ) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/08.Layout/01.Example/login'>Login Main</Link>
                </li>
                <li>
                    <Link href='/08.Layout/01.Example/login/loginuser'>Login Regular User</Link>
                </li>
                <li>
                    <Link href='/08.Layout/01.Example/login/loginadmin'>Login Admin</Link>
                </li>
            </ul>

            {children}
        </div>
    )
}

export default Layout;