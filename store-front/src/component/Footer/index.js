
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <p> &copy; reserved for Asura store Front   </p>
                    <p> contact us : <br />
                        <a href="hussein66253@gmail.com">Email</a>
                        <br />
                        <p> Phone number: 0780189321</p>

                    </p>
                </Nav>
            </Navbar>
        </footer>
    )
}
export default Footer;