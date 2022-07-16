import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Button from '../../node_modules/react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

class PotterSpell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            spellName: '',
            spellUse: ''
        };
    }

    loadRandomSpell = async () => {
        this.setState({
            isLoading: true
        });

        const randSpellID = Math.floor(Math.random() * 71) + 1;
        const spell = (await axios.get("https://fedeperin-harry-potter-api-en.herokuapp.com/spells/" + `${randSpellID}`)).data;

        this.setState({
            isLoading: false,
            spellName: spell.spell,
            spellUse: spell.use
        });
    }

    async componentDidMount() {
        await this.loadRandomSpell(); 
    }

    render() {
        return (
            <>
                {
                    this.state.isLoading ? (
                        <Alert className="text-center" key="dark" variant='dark'>Retrieving scrolls...</Alert>
                    ) : (
                        <>
                            <Container>
                            <Row className='align-content-center'>
                            <Col sm={12}>
                            <Card className="text-center">
                                <Card.Header style={{ background: "#6a4324" }}>
                                <Button variant="outline-light" onClick={this.loadRandomSpell}>
                                    Reopen Scroll
                                </Button>
                                </Card.Header>
                                <Card.Body className='border-body'>
                                <div>
                                    <p>
                                        <Card.Title>
                                            {this.state.spellName}
                                        </Card.Title>
                                        <Card.Text>
                                            {this.state.spellUse}
                                        </Card.Text>
                                    </p>
                                </div>
                                </Card.Body>
                            </Card>
                            </Col>
                            </Row>
                            </Container>
                        </>
                    )
                }
            </>
        );
    }
}

export { PotterSpell };