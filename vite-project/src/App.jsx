import { useState } from 'react'
import Card from './components/card/Card'
import {nanoid} from "nanoid"




function App() {
  const [animals, setAnimals] = useState([
    {id: '12sdjnf', name: "Animal-1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi?"},
    {id: '123fss', name: "Animal-2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi?"},
    {id: '2323sfsf', name: "Animal-3", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi?"}
  ])
  const [form,setForm] = useState({})


  const handleChange=(event)=>{
    const {name, value}=event.target
    setForm({...form, [name]: value})

  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const id = nanoid()
    const payload = {...form, id}
    animals.push(payload)
    setAnimals([...animals])
  }

  const deleteAnimal =(id)=>{
    const new_animal = animals.filter(animal => animal.id != id)
    setAnimals([...new_animal])

  }

  return (
    <>
    <div className="container">
    <div className="row my-4" >
       <div className="col-mmd-6 " >
       <div className="card my-2">
        <div className="card-body">
          <form id='submit' onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={handleChange}  placeholder='Animal name...'/>
            <textarea name="desc" cols={30} onChange={handleChange} rows={10} placeholder='Description' className='form-control my-2'></textarea>
          </form>
        </div>
        <div className="card-footer">
          <button type='submit' className='btn btn-success' form='submit'>add new animals</button>
        </div>
       </div>
       
       </div>
    </div>
      <div className="row">
      {
        animals.map((item, index) =>(
          <div className="col-md-4" key={index} deleteAnimal={()=>deleteAnimal(item.id)}> 
          <Card animal={item} deleteAnimal={deleteAnimal}/>
          </div>
        ))
      }
      </div>
    </div>
    
    </>
  )
}

export default App



