import '../styles/wikiviewer.scss';
import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';
import WikiSearch from './WikiSearch/index';

const Wikiviewer = () => (
    <>
        <Header />
        <WikiSearch />
    </>
);

ReactDOM.render(<Wikiviewer />, document.getElementById('root'));