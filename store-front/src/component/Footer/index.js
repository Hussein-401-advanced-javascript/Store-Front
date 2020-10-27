
import React from 'react';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
const FooterContainer = styled.div`
  text-align: center;
//   position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 100px !important ;
  background: #f5f5f5;
`;

function Footer() {
    return (
        <footer>
            {/* <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <p> &copy; reserved for Asura store Front   </p>
                    <p> contact us : <br />
                        <a href="hussein66253@gmail.com">Email</a>
                        <br />
                        <p> Phone number: 0780189321</p>

                    </p>
                </Nav>
            </Navbar> */}
            <FooterContainer>
                <Typography variant="title">
                    <Typography variant="h6" component="h1" >
                        &copy; reserved for Asura store Front
                     </Typography>
                    <Typography variant="h5" component="h1"> contact us : <a href="tt@icloud.com">Email</a>
                        <hr />
                        <Typography variant="h6" component="h1" > Phone number <AddIcCallIcon/>: 0780189321</Typography>
                    </Typography>
                </Typography>
            </FooterContainer>
        </footer>
    )
}
export default Footer;