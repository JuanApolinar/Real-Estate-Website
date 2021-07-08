import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageOne from '../images/kitchen-1.jpg'

const Section = styled.section`
    background: #000d1a;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const Container = styled.div`
    background: #fff;
    padding: 12rem 0rem;
    position: relative;
`;

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;

`;

const ColumnLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px -15px;
    justify-content: flex-start;
    padding: 1rem;
`;

const ColumnRight = styled.div`
    position: absolute;
    top: -80px;
    right: 0;
    max-width: 850px;
    height: 140%;
    width: 45%;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        height: 320px;
        top: -65px;
        width: 80%;
        margin: 0 auto;
        left: 0;
    }
`;

const Content = styled.div`
    flex: 0 0 50%;

    @media screen and (max-width: 768px){
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 250px;
    }

    h1{
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    p{
        margin-bottom: 1rem;
        line-height: 1.5;
    }
`;


const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Features = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content
                            data-aos="fade-right"
                            data-aos-duration='1200'
                            data-aos-delay='300'
                            data-aos-once='true'
                            data-aos-anchor-placement='center bottom'
                        >
                            <h1>Stunning Interior</h1>
                            <p>Ex pariatur proident officia commodo nostrud. Qui mollit sunt et ea aliqua sit. Sunt qui sit sunt consectetur officia. Ut elit qui aute occaecat proident Lorem labore id eiusmod duis ullamco cillum ut nostrud. Nostrud do minim ipsum labore eu quis laborum excepteur deserunt ad dolor mollit minim. Cillum magna mollit laborum sint non est laboris commodo. Proident elit est cupidatat fugiat ut ex duis quis quis aliqua.</p>
                           <Button to="/homes">Learn More</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image 
                            src={ImageOne} 
                            data-aos="fade-left"
                            data-aos-duration='1200'
                            data-aos-once='true'
                            data-aos-anchor-placement='center bottom'
                        />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
