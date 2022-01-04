import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './TeamMamber.css'
import { Col, Container, Row } from 'react-bootstrap';

const TeamMamber = () => {
    return (
        <Container className='intro'>
            <h1 className='text-center text-warning py-5 fw-bold'>Team Member</h1>
            <Row xs={1} md={2} className="g-4">
                <Col >
                    <div className="team-member my-4">
                        <div className="membr-img">
                            <img src='https://i.ibb.co/7KDcj9P/269876662-216486187348438-8536358755366616680-n.jpg' alt="" />
                            <span className="img-icon"></span>
                        </div>
                        <h3>Abdul Al Joboyer Chy</h3>
                        <p>Full-Stack Developer</p>
                        <div className="social-contact">
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a></span>
                            <span><a href="https://twitter.com/" target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a></span>
                            <span><a href="https://www.linkedin.com/" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a></span>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="team-member my-4">
                        <div className="membr-img">
                            <img src='https://i.ibb.co/WHZL6CQ/20190910161408-IMG-3732.jpg' alt="" />
                            <span className="img-icon"></span>
                        </div>
                        <h3>Mainur Rahman Enan</h3>
                        <p>Full-Stack Developer</p>
                        <div className="social-contact">
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a></span>
                            <span><a href="https://twitter.com/" target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a></span>
                            <span><a href="https://www.linkedin.com/" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a></span>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="team-member my-4">
                        <div className="membr-img">
                            <img src='https://i.ibb.co/khZTTTf/88301455-2472502543004524-5900490362610253824-n.jpg' alt="" />
                            <span className="img-icon"></span>
                        </div>
                        <h3>Robiul Islam Robin</h3>
                        <p>Full-Stack Developer</p>
                        <div className="social-contact">
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a></span>
                            <span><a href="https://twitter.com/" target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a></span>
                            <span><a href="https://www.linkedin.com/" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a></span>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="team-member my-4">
                        <div className="membr-img">
                            <img src='https://i.ibb.co/7tgKR9Y/rabbi2.jpg' alt="" />
                            <span className="img-icon"></span>
                        </div>
                        <h3>Rajaul Islam</h3>
                        <p>Full-Stack Developer</p>
                        <div className="social-contact">
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a></span>
                            <span><a href="https://twitter.com/" target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a></span>
                            <span><a href="https://www.linkedin.com/" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TeamMamber;