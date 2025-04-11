
const User = async () => {

    await new Promise((resolve) => setTimeout(() => {
        resolve('Content Loading...')
    }, 3000));
    // Chaining routes from localhost:300 to localhost:3000/12.Loading/user will have a delay of 3ms

    return(
        <div>
            This is the user page.
        </div>
    )
}

export default User;