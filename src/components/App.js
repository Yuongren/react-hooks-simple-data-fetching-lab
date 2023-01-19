// create your App component here
import React, {useState, useEffect} from "react";


function App() {
    const [picture, setPicture] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setPicture(data);
            setLoading(true);
        });
    }, []);

    if (!loading) return <p>loading ...</p>;
    return (
        <div className="App">
          <img src={picture.message} alt="A Random Dog" />
        </div>
    )
}

export default App