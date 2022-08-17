import React, { useState, useEffect } from 'react';


    const initialForm = {
        name: "",
        id: null,
    };
     const IngredientsForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    
        const [form, setForm] = useState(initialForm);
    
        const handleChange = (e) => { 
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })};
    
    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);
    
        const handleSubmit = (e) => { 
            e.preventDefault();
    
            if(!form.name){
                alert("Agrega un ingrediente");
                return;
            }
    
            if(form.id === null){
                createData(form);
            }else{
                updateData(form);
            }
    
            handleReset();
        }
    
        const handleReset = (e) => {
            setForm(initialForm);
            setDataToEdit(null);
         }
    
        return (
            <div>
                <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='Ingrediente' onChange={handleChange} value={form.name} />
                    <input type="submit" value="Agregar" />
                    <input type="reset" value="Limpiar"  onClick={handleReset} />
                </form>
            </div>
        );
    }
    
    export default IngredientsForm;