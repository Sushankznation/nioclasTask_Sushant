import React, { useEffect, useState } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Spinner from './Spinner';
import axios from 'axios';
import QuestionList from './QuestionList';
import ErrorDisplay from './ErrorDisplay';

function Question() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [linkValue, setLinkValue] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const linkToQuestion = [
            'AreaUnderTheCurve_901',
            'BinomialTheorem_901',
            'DifferentialCalculus2_901',
        ];
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${linkToQuestion[linkValue]}`
                );
                let actualData = response.data;
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [linkValue]);

    const minusQuestion = () => {
        setLinkValue((changeIndex) => changeIndex - 1);
    }

    const plusQuestion = () => {
        setLinkValue((changeIndex) => changeIndex + 1);
    }

    return (
        <MathJaxContext>
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: '100vh', width: '100%', backgroundColor: '#101820FF' }}
            >
                <Container>
                    <Row className="justify-content-center my-3">
                        <Col xs={12} md={8}>
                            <h3 className="text-center" style={{color:'white'}}>Let's Solve Buddy ! </h3>
                            {loading && <Spinner />}
                            {error && <ErrorDisplay error={error} />}
                            {data && (
                                <QuestionList data={data} number={linkValue + 1} />
                            )}
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="d-flex justify-content-between my-3"
                        >
                            <Button
                                variant="primary"
                                id="prev"
                                disabled={linkValue === 0}
                                onClick={minusQuestion}
                            >
                                Prev
                            </Button>
                            <Button
                                variant="primary"
                                id="next"
                                disabled={linkValue === 2}
                                onClick={plusQuestion}
                            >
                                Next
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </MathJaxContext>
    );
}

export default Question;
