const React = require('react');
const ReactDom = require('react-dom/client');

const heading1 = React.createElement(
    'h1',
    {   
        key:'h1',
        id:'heading1',
        style:{color:'red'},
    },
    "Hii this is first heading create by the react"
);
const heading4 = React.createElement(
    'h1',
    {   
        key:'h4',
        id:'heading4',
        style:{color:'red'},
    },
    "Hii this is first heading create by the react"
);
const heading2 = React.createElement(
    'h1',
    {   
        key:'h2',
        id:'heading2',
        style:{color:'red'},
    },
    "Hii this is second heading create by the react"
);
const heading3 = React.createElement(
    'h1',
    {   
        key:'h3',
        id:'heading3',
        style:{color:'red'},
    },
    "Hii this is fourth heading create by the react"
);


const container = React.createElement('div',
    {
    className:'container'
    },
    [heading1,heading2,heading3,heading4]
)

const root = ReactDom.createRoot(document.getElementById('contianer'));
root.render(container);



