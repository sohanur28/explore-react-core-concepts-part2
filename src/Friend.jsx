export default function Friend({friend}){
    const {name, email, username} = friend;
    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
        </div>
    )
}