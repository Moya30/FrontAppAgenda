import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Home() {
    const url = 'http://localhost:9000/api/personas'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url);
        console.log(response.status)
        const responseJson = await response.json();
        setTodos(responseJson)
        console.log(responseJson);

    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (

        <div className="container">

            <div className="row mt-5">
                <div>
                    <Button variant="warning mb-4">Lista de contactos </Button>{' '}
                </div>
                <Table striped bordered hover line>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombres</th>
                            <th>Numeros</th>
                            <th>Acciones</th>


                        </tr>
                    </thead>
                    <tbody>
                        {!todos ? 'cargando..':
                        todos.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.number}</td>
                                    <td> <Button variant="danger"> <i class="material-icons">&#xE872;</i></Button> <Button variant="primary"> <i class="material-icons">&#xe254;</i></Button></td>
                                </tr>
                            )
                        })}


                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home;