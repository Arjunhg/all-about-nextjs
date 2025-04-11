'use client'

import Link from "next/link";
import { useState } from "react";

const Layout = () => {

    const [name, setName] = useState('');

    return(
        <div className="p-4">
            <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="border"
            />
            <br/>
            <br/>
            <Link className="border p-2 rounded-md" href='/09.Template/02.WithTemplateFixed/analytics/revenue'>Revenue</Link>

            <Link className="border p-2 rounded-md" href='/09.Template/02.WithTemplateFixed/analytics/stats'>Stats</Link>
        </div>
    )
}

export default Layout;