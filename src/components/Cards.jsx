import Card from './Card';

export default function Cards({characters,onClose}) {
    //const {characters } = props;
   return (
   <div  style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',flexWrap:'wrap'}}>
     
        {characters.map(character => (
                 <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    origin={character.origin}
                    gender={character.gender}
                    image={character.image}
                    onClose={onClose}
                    />
                
                    ))}
           
      </div>
   );
}
