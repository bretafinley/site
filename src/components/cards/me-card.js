import React from 'react';
import Ionicon from 'react-ionicons';

function MeCard(props) {
    return (
        <div className="me">
            <h4>Bret Finley</h4>
            <div className="btn-group" role="group">
                <a className="btn" href="mailto:bretafinley@gmail.com"><Ionicon icon="ion-email" fontSize="35px" color="rgb(69, 130, 236)" /></a>
            </div>
            <div className="btn-group" role="group">
                <a className="btn" href="#"><Ionicon icon="ion-social-linkedin" fontSize="35px" color="rgb(69, 130, 236)" /></a>
                <a className="btn" href="https://github.com/bretafinley"><Ionicon icon="ion-social-github" fontSize="35px" color="rgb(69, 130, 236)" /></a>
            </div>
            <div className="btn-group" role="group">
                <a className="btn" href="#"><Ionicon icon="ion-social-twitter" fontSize="35px" color="rgb(69, 130, 236)" /></a>
                <a className="btn" href="#"><Ionicon icon="ion-social-facebook" fontSize="35px" color="rgb(69, 130, 236)" /></a>
            </div>
        </div>
    );
}

export default MeCard;