import React from "react";
import Snake from "./Snake/Snake.jsx";

const App = () => {

    let ref = React.createRef();

    React.useEffect(() => {
        document.addEventListener('keydown', function (event) {
            switch (event.code) {
                case "KeyS":
                    console.log(ref);
                    break;
                case "default":
                    break;
            }
            console.log(event);
        })
    }, [])

    return <div><Snake /></div>
}

export default App;