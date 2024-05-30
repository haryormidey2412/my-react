import './App.css';
function Mars(sky){
    return(
        <div>
            <img src={sky.image} alt='man' className='myimage'/>
            <h1>{sky.name}</h1>
            <h1>{sky.price}</h1>
            {/* <h1>{sky.description}</h1> */}
            <p>{sky.description}</p>
        </div>
    )
}

export default Mars;