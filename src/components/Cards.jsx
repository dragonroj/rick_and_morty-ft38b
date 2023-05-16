import Card from './Card';

export default function Cards(props) {
    const {characters } = props;
   return (
   <div  style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',flexWrap:'wrap'}}>
     
        {characters.map(character => (
                 <Card
                    key={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    origin={character.origin}
                    gender={character.gender}
                    image={character.image}
                    />
                
                    ))}
           
      </div>
   );
}
