import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const CarritoContext = createContext();


const CarritoProvider = (props)=>{
    const [flores , setFlores] = useState({
        id:"",
        nombre:"",
        cantidad:"",
        nombrepersona:"",
        proveedor:" "
    })

    const [lista, setLista]= useState([]);
    
    useEffect(()=>{
        firebase.database().ref('Flores').on('value', snapshot=>{
            let floresLista=[];
            snapshot.forEach(row=>{
                floresLista.push({
                    id:row.key,
                    nombre:row.val().nombre,
                    cantidad:row.val().cantidad,
                    nombrepersona:row.val().nombrepersona,
                    proveedor:row.val().proveedor
                })
            })
            setLista(floresLista)
        })
    },[])




    const eliminar =(id)=>{
        firebase.database().ref('Flores/'+id).set(null).then(()=>{
            alert("Eliminado")
        })

        const temporal = lista.filter((item)=>{
            return item.id!== id;
        })
        setLista(temporal)
    }

    
    return(
        <CarritoContext.Provider
            value={{
                flores,
                lista,
                setFlores,
                setLista,
                eliminar,
            }}
        >
            {props.children}

        </CarritoContext.Provider>
    )
}

export default CarritoProvider;