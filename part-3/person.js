const Person = (props) => {
    const name = props.name.length > 8 ? props.name.substring(0, 7).trim() : props.name;
    const hobbies = [];
    if(props.hobbies){
        for (let hobbie of props.hobbies) {
            hobbies.push(<li>{hobbie}</li>);
        }
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{name}, { props.age >= 18 ? "please go vote!" : "you must be 18" }</h3>
            <ul>
                { hobbies }
            </ul>
            <hr></hr>
        </div>
    );
}