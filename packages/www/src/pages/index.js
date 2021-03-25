import React, { useEffect } from 'react'
import {Container, Heading, Button, Flex} from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';

export default props => {
    useEffect(() => {
        netlifyIdentity.init({});
         
    }, [])
    return(
        <Container>
            <Flex sx={{flexDirection :'column', padding : 3}}>
            <Heading as="h1">
            TODO APP
            </Heading>
            <Button sx={{marginTop : 2, color:'black'}} onClick={()=>{netlifyIdentity.open()}}>Log In </Button>
            </Flex>
        </Container>
    )};

