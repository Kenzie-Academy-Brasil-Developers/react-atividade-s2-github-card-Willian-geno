import "./styled.css"

const Card = ({list}) => {

    const visitRepo = (url) => {
        window.location.href = url; 
    }

    return <ul>
        {list.map((item,idex)=> <li key = {idex} >
            <img src = {item.owner.avatar_url}/>
            <div>
                <p>{item.full_name}</p>
                <p>{item.description}</p>
            </div>
            <button onClick = {() => visitRepo(item.html_url)} >Visitar</button>
        </li>)}
    </ul>
}

export default Card;