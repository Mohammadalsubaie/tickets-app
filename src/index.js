import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className= "comment">
                <a href="/" className="avatar">
                    img alt="avatar" />
                </a>
                <div className="content">
                    <a href='/' className="author">
                      sam
                    </a>
                    <div className="matedata">
                      <span calssName="data">today at 6:00PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

ReactDOM.render(<App />, document.querySelector('#root'));