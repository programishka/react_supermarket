import React from 'react';
import ListCard from "./list-cards/list-card";

class App extends React.Component {
    initialState = {

    }
    render() {
        const data = [
            {
                description: "JavaScript",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png",
            },
            {
                description: "Python",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2880px-Python_logo_and_wordmark.svg.png",
            },
            {
                description: "C++",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png",
            },
            {
                description: "django",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2880px-Django_logo.svg.png",
            }
        ];


        return (
            <div className="App">
                <h3>Расположите в порядке предпочтения выше лучше</h3>
                <ListCard data={data}/>
            </div>
        );

    }
}

export default App;
