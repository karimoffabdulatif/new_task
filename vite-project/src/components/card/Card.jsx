

function Card ({animal, deleteAnimal}) {
  const {name, desc} = animal

    return (
      <>
      <div className="card">
        <div className="card-header">
            <h1>{name}</h1>
        </div>
        <div className="card-body">
            <p>{desc}</p> 
        </div>
        <div className="card-footer">
            <button className="btn btn-danger" onClick={()=>deleteAnimal(animal.id)}>delete</button>

        </div>

      </div>
      </>
    )
  }
  
  export default Card