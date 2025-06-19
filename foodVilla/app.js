import React from 'react';
import ReactDOM from 'react-dom/client';




const Title = ()=>{
    return (
        <img className='logo' src='https://binaryimages.netlify.app/Photo%20(File%20responses)/WhatsApp%20Image%202024-12-10%20at%2012.15.06.jpeg' alt='logo'/>
    )
}
   



const Header = ()=>{
    return (
        <div className='header'>
        <Title/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
    )
}


const Body = ()=>{
    return(
       <div className='app-body'>
        <h1>body</h1>
       </div>
    )
}



const Footer = ()=>{
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}


const AppComponenet = ()=>{
    return (
        <>
        <React.Fragment>
            <React.Fragment>
            <Header/>
        <Body/>
        <Footer/>
                </React.Fragment>
        </React.Fragment>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponenet/>);