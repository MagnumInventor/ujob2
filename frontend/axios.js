import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/example')
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
    }, []);

    return <div>{data ? data.message : 'Loading...'}</div>;
};

export default App;
