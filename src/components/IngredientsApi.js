
import React, { useEffect, useState } from 'react';
import { helpHttp } from "../helpers/helpHttps";
import Message from './Message';
import IngredientsForm from './IngredientsForm';
import Loader from './Loader';
import IngredientsTable from './IngredientsTable';
import RecipiesTable from './RecipiesTable';

const IngredientsFilter = () => {


        const [db, setDb] = useState(null);
        const [dbRecipies, setDbRecipies] = useState(null);
        const [dataToEdit, setDataToEdit] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);
    
        let api = helpHttp();
        let url = "http://localhost:5000/Ingredients";
        let urlRecipies = "http://localhost:5000/Recipies";
    
        useEffect(() => {
            setLoading(true);
       
            helpHttp().get(url)
                .then((res) => {
                    //  console.log(res);
                    if (!res.err) {
                        setDb(res);
                        setError(null);
                    } else {
                        setDb(null);
                        setError(res);
                    }
                    setLoading(false);
                });
        }, [url]);

        useEffect(() => {
            setLoading(true);
       
            helpHttp().get(urlRecipies)
                .then((res) => {
                    //  console.log(res);
                    if (!res.err) {
                        setDbRecipies(res);
                        setError(null);
                    } else {
                        setDbRecipies(null);
                        setError(res);
                    }
                    setLoading(false);
                });
        }, [urlRecipies]);
    
        const createData = (data) => {
            data.id = Date.now();
    
            let options = { body: data, headers: { "content-type": "application/json" } };
    
            api.post(url, options).then((res) => {
               //console.log(res);
                if (!res.err) {
                    setDb([...db, res]);
                } else {
                    setError(res);
                }
            });
    
        };
        const updateData = (data) => {
            let endpoint = `${url}/${data.id}`;
    
            let options = { body: data, headers: { "content-type": "application/json" } };
    
            api.put(endpoint,options).then((res) => {
               // console.log(res);
                if (!res.err) {
                    let newData = db.map(el => el.id === data.id ? data : el);
                    setDb(newData);
                } else {
                    setError(res);
                }
            })};
    
            const deleteData = (id, name) => {
                let isDelete = window.confirm(`Estas seguro de eliminar el ingrediente '${name}' ?`);
    
                if (isDelete) {
                    let endpoint = `${url}/${id}`;
                    let options = { headers: { "content-type": "application/json" } };
                    api.del(endpoint,options).then((res)=>{
                        if (!res.err) {
                            let newData = db.filter(el => el.id !== id);
                            setDb(newData);
                        } else {
                            setError(res);
                        }
                    });
                   
                } else {
                    return;
                }
            };
    
    
            return (
                <div>
                    <h2>Recetas</h2>
                    <article className="grid-1-2">
                        <IngredientsForm
                            createData={createData}
                            updateData={updateData}
                            dataToEdit={dataToEdit}
                            setDataToEdit={setDataToEdit} />
                        {loading && <Loader />}
                        {error && <Message msg={`Error ${error.status}: $(error.statusText)`} bgColor="#dc3545" />}
                        {db && <IngredientsTable
                            data={db}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData} />}
                    </article>
                    <hr/>
                    <article>
                    {dbRecipies && <RecipiesTable
                            data={dbRecipies}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData} />}
                    </article>
                </div>
            );
    
        }
    
        export default IngredientsFilter;