import profilePic from './assets/logo.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" width={150}></img>
            <h2 className='card-title'>Fidelis</h2>
            <p className='card-text'>I am an eternal learner</p> 
        </div>

    );
}

export default Card