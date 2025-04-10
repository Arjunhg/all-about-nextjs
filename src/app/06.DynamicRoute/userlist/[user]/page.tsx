
const UserListPage = async ({params}: {params: {user: string}}) => {

    // console.log(props); //contains params and searchParams

    const {user} = await params;
    // console.log(user);

  return (
    <div>
        Info About {user}
    </div>
  );
};

export default UserListPage;


