export const ContactList = ({ data }) => {
    return (data.length !== 0 && <div>
        <h4>Contacts</h4>
        <ul>
        {data.map(el => {
            return (<li key={el.id}>{el.name}: {el.number }</li>)
    })}
    </ul>
    </div>)
}