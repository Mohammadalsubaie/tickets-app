
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class MovieComponent extends Component {
    render() {
        return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" />
                    </a>
                    <div className="content">
                        <a href='/' className="author">
                            sam
                        </a>
                        <div className="matedata">
                            <span calssName="data">today at 6:00PM</span>
                        </div>
                    </div>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                </Form>
                <input type="submit" value="Submit" />
            </div>
        )
    }
}