const Tweet = (props) => {
    const { username, name, date, message } = props;
    return (
        <div>
            <h3>Tweet by</h3>
            <h1>{username}</h1>
            <h6>{name}</h6>

            <p><b>{date}</b></p>
            <p>{message}</p>
            <hr></hr>
        </div>
    )
}