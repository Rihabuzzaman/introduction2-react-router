import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
        <h2>Our Users: {users.length}</h2>
        <p>Fantastic and vodro Users</p>
        <div>
            {
                users.map(user=><Users key={user.id} user={user}></Users>)
            }
        </div>
    </div>
       
    )
};

export default Users;
