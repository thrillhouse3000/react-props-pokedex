import './Pokecard.css'

const Pokecard = ({id, name, type, base_experience}) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="Pokecard">
            <h3>{name}</h3>
            <img className="Pokecard-img" src={img}/>
            <p>Type: {type}</p>
            <p>Exp: {base_experience}</p>
        </div>
    )
}

export default Pokecard;