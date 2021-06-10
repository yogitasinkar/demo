import React from 'react'
import { Container } from 'reactstrap';
import logo  from '../../images/brandnew.jpeg'

const Vision = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center'>VISION</h3>
            <div className='text-center'>
                <img src={logo} alt='logo' style={{width: '500px'}}/>
            </div>
            <div  className='m-5' style={{fontSize: '20px'}}>
                <p> Our Vision ...</p>
            </div>
        </Container>
    )
}

export default Vision
