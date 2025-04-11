import { redirect } from "next/navigation";

const User = () => {
    redirect('/11.Redirect/about');
    return(
        <div>
            This is the user page.
        </div>
    )
}

export default User;