import React, {Component, Fragment} from 'react';
import { Container } from 'react-bootstrap';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class TopBanner extends Component {
    render() {
        return (
           <Fragment>
               <Container fluid={true} className={"topFixedBanner p-0"}>
                   <div class={"topBannerOverlay"}>
                       <Container className={"topContent"}>
                           <Row>
                               <Col className={"text-center"}>
                                   <h1 class={"topTitle"}>EASY LEARNING</h1>
                                   <h4 class={"topSubTitle"}>Learn Professionally</h4>
                                   {/*<Button variant={"primary"}>Learn More</Button>*/}
                               </Col>
                           </Row>
                       </Container>
                   </div>
               </Container>
           </Fragment>
        );
    }
}

export default TopBanner;