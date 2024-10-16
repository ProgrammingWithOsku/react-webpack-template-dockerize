import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import './assets/styles/App.scss';

const App = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="App">
            <Header />
            <main>
                <h2>This is the main content area</h2>
                <Button label="Click Me!" onClick={handleClick} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
