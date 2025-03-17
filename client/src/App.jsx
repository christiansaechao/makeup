import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
    const [backendData, setBackendData] = useState(null);
    // proxy set up so we don't have to write http://localhost:8181 in package.json
    const url = "/users/user";

    const getUsers = async () => {
        try {
            const { data } = await axios.get(url);
            setBackendData(data); 
        } 
        catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const loadingComponent = () => {
        return <div>Loading...</div>
    }

    return (
        <div>
            {backendData !== null ? 
            <>
            Welcome: {backendData?.map((user) => {
                return <span key={user.id}>{user.firstName} {user.lastName}</span>
            })}
            </> : loadingComponent()
            }
        </div>
    )
}

export default App;