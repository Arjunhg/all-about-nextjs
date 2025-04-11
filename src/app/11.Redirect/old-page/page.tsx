import { redirect } from "next/navigation";

const OldPage = () => {
    redirect('/11.Redirect/new-page');
    return(
        <div>
            This is the old page.
        </div>
    )
}

export default OldPage;

//  or

/*
'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OldPage = () => {

    const router = useRouter();

    // router.push('/11.Redirect/new-page'); Will give error as we are calling it during rendring phase

    useEffect(() => {
        router.push('/11.Redirect/new-page');
    }, []);

    return(
        <div>
            This is the old page.
        </div>
    )
}   

export default OldPage;
*/