import React from 'react';
import {Media} from 'reactstrap';
import './media.css';

class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        const menu = this.props.members.map((member) => {
            return(
                <div key = {member.id} id="unit" className="col-12 mt-5">
                    <Media tag="li">
                        <Media left>
                            <Media object src={member.image} alt={member.name} id="img"/>
                        </Media>
                        <Media body className="ml-3">
                            <Media heading><strong>{member.name}</strong></Media>
                            <div><strong>Info - </strong>{member.description}</div>
                            <div>Instagram - {member.instagram}</div>
                        </Media>
                    </Media>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;