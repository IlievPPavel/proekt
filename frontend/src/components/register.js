import {Link, useLocation} from "react-router-dom";
import {UseLocation} from 'react-router-dom'
import {Form} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {


    return(
        <div  class="cent">
            <br />



            <h1 className="t-cent">Регистрация</h1>
            <br />
            <br />
            <Form>


                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Потр. име*
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Потребителско име" />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Парола*
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Парола" />
                    </Col>

                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Повтори Парола*
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Парола" />
                    </Col>

                </Form.Group>
                {/*<fieldset>*/}
                {/*    <Form.Group as={Row} className="mb-3">*/}
                {/*        <Form.Label as="legend" column sm={2}>*/}
                {/*            Radios*/}
                {/*        </Form.Label>*/}

                {/*    </Form.Group>*/}
                {/*</fieldset>*/}


                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Регистрирай се</Button>
                    </Col>
                </Form.Group>
            </Form>





        </div>
    )
}


export default Login