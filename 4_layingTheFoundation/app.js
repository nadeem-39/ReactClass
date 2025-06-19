const React = require('react');
const ReactDom = require('react-dom/client')


const heading1 = <h1>hii i am heading 1 simple</h1>

const Heading2 = function(){ 
    return(
        <div>
        <h2>hii i am heading 2</h2>
        <h2>hii i am heading 2</h2>
        <h2>hii i am heading 2</h2>
        <h2>hii i am heading 2</h2>
        </div>
        )
    };


const heading3= (
    <div>
        <h3>hii i am heading 4 </h3>
        <h3>hii i am heading 4 </h3>
        <h3>hii i am heading 4 </h3>
        <h3>hii i am heading 4 </h3>
        <h3>hii i am heading 4 </h3>
    </div>)

const allData = (<div>
    {heading1}
    {<Heading2/>}
    {heading3}
</div>);

const root = ReactDom.createRoot(document.getElementById('container'));

root.render(allData)