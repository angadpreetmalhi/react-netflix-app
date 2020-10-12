import React from 'react';

function Card(props){
return(
<div className="cards">
    <div className="card">
        <img src={props.img} alt="myPic" className="card_img"/>
            <h5>{props.title}</h5>
            <a href={props.link} target="_blank">
                <button> Watch Now</button>
            </a>
    </div>
</div>

)
}
export default Card;