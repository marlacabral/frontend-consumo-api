import React, { useState, useEffect } from "react";

function Barra (){

    const [init, setInit] = useState([]);
    const [dados, setDado] = useState([]);

    useEffect(() => {
      const fecthDado = async () => {
        try{
          const response = await fetch(
            "http://localhost:3000/")
          const data = await response.json();
          setInit(data);

        } catch(error){
          console.log(error);
        }
      };
      fecthDado();
    }, [])

    const handleChange = ({ target }) => {
      if (!target.value){
        setDado(init);
        return;
      }

      const filterDado = dados.filter(({city}) => city.includes(target.value));

      setDado(filterDado);
    }
    return(
    <>

            
      
        <div className="container-input">
            <label>Buscar: </label>
            <input type='text' onChange={handleChange}></input>
        </div>

        <div className="container-list">
            {dados.map(item => { return <div className='item'><span>{item.name}</span></div>})}
        </div>
        
        <form onSubmit={item.onSubmit} className='barra__form'>
                <input type='text' className='digite' placeholder='Digite o nome ...' />
                <input type='submit' className='procurar' value='Procurar' />
            </form>
      </>
            )}
    
    
  
    

export default Barra;