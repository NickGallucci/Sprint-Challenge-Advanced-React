import React from 'react'; 
import styled from 'styled-components'; 


const UserCard = styled.div ` 
    border: 10px solid blue; 
`


function User(props) {
    return (
        <section Id="Container">
        <UserCard testId='player'> 
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
        </UserCard> 
        </section>
    )
} 
 
export default User; 