import React from 'react'
import { Card } from 'react-bootstrap';
import UserAvatar from './UserAvatar';
import UserPageNav from './UserPageNav';

export default function UserDetails({ userData }) {
    return (
        <Card style={cardStyle}>
            <UserAvatar userAvatar={userData.avatar} />
            <br></br>
            <Card.Body>
                <Card.Text style={{ textAlign: 'center' }}>
                    <h5>{userData.first_name} {userData.last_name}</h5>
                    <strong>Intro:</strong><br />
                    {userData.intro}
                </Card.Text>

                <UserPageNav />
            </Card.Body>
        </Card>
    )
}

const cardStyle = {
    width: '90%',
    height: '80%',
    padding: '2%',
    margin: '5%',
}