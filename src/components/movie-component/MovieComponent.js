
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';


export default class MovieComponent extends Component {
    render() {
        return (
            <Container>

                <Col sm="4" xs="4" md="4">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </Form>
                </Col>

            </Container>
        )
    }
}