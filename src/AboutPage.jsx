import React from 'react';
import styled from 'styled-components';
import backImage from './img/contact-bg.png';
import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';
import { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { setActiveItem } from './store/actionCreator'

const flag = {
  visible: { opacity: 1, x: 0 },
  initial: { opacity: 0, x:'100%' }
}

class AboutPage extends React.Component {
    componentDidMount(){
        this.props.setActiveItem('About')
    }

    render() {
        return (
            <Container
                variants={flag}
                animate="visible"
                initial="initial"
                transition={{type:"spring", duration:2}}
            > 
                <AboutUsTitle>About me</AboutUsTitle>
                <ShortDesc>                 
                    <span>Student of the U.T.T(in France), devoted to web developpemnt. Expect to be a fullstack Enginner.</span>
                    <span>Front-end Framework Reactjs+Redux+Router, Bootstrap etc... Back-end NodeJS, Express.js etc...</span>
                </ShortDesc>
                <DetailDesc>
                    <DetailDescContent>
                        <DetailDescContentTilte>
                            <div>
                                KNOW<br/>MORE ABOUT ME
                            </div>
                        </DetailDescContentTilte>
                        <DetailDescContentText>I am Yanfeng Qiu, Chinese student from Troyes, France. I have rich interest in web site design and website developpment, I am also curious to learn new technology.</DetailDescContentText>
                        <DetailDescContentTable>
                            <DetailDescContentTableRow>
                                <DetailDescContentTableItem>
                                    <DetailDescContentTableItemTitle>Name: </DetailDescContentTableItemTitle>
                                    <DetailDescContentTableItemContent>Yanfeng Qiu</DetailDescContentTableItemContent>
                                </DetailDescContentTableItem>
                                <DetailDescContentTableItem>
                                    <DetailDescContentTableItemTitle>Location: </DetailDescContentTableItemTitle>
                                    <DetailDescContentTableItemContent>76 rue du 8 mai 1945, Troyes</DetailDescContentTableItemContent>
                                </DetailDescContentTableItem>
                            </DetailDescContentTableRow>
                            <DetailDescContentTableRow>
                                <DetailDescContentTableItem>
                                    <DetailDescContentTableItemTitle>Birthday: </DetailDescContentTableItemTitle>
                                    <DetailDescContentTableItemContent>28 Decembre, 1997</DetailDescContentTableItemContent>
                                </DetailDescContentTableItem>
                                <DetailDescContentTableItem>
                                    <DetailDescContentTableItemTitle>Email: </DetailDescContentTableItemTitle>
                                    <DetailDescContentTableItemContent>yanfeng.qiu@utt.fr</DetailDescContentTableItemContent>
                                </DetailDescContentTableItem>
                            </DetailDescContentTableRow>
                        </DetailDescContentTable>
                    </DetailDescContent>
                    <DetailDescImage>
                        <img src={photo1} width="400px" alt=""></img>
                    </DetailDescImage>
                </DetailDesc>
                <DetailDesc>
                    <DetailDescImage>
                        <img src={photo2} width="400px" alt=""></img>
                    </DetailDescImage>
                    <DetailDescContent>
                        <DetailDescContentTilte>MY<br/> HOBBY</DetailDescContentTilte>
                        <DetailDescContentTable>
                            <DetailDescContentTableRow>
                                Voyage : <br/>Europe (France), Asia(Shanghai, Nanjin, Wuxi, Hangzhou, etc).
                            </DetailDescContentTableRow>
                            <DetailDescContentTableRow>
                                Sport :  <br/> Basketball
                            </DetailDescContentTableRow>
                            <DetailDescContentTableRow>
                                Action associatif: <br/> Member of the association of Basketball in Shanghai University.
                            </DetailDescContentTableRow>
                        </DetailDescContentTable>
                    </DetailDescContent>
                </DetailDesc>
            </Container>
        )
    }
}

const slide = keyframes` 
    from {
        background-position: 0 0;
    }

    to {
        background-position: -400px 0;
    }
}
`

const Container = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-image:url(${backImage});
    animation: ${slide} 20s linear infinite;
    background-repeat: repeat;
    background-position: center center;
    background-size: 100% 150%;
    z-index: 2;
    padding: 80px 0px;
`


const AboutUsTitle = styled.div`
    font-size: 40px;
    font-weight: 600;
    margin-bottom:20px;
`

const ShortDesc = styled.div`
    line-height: 1.6;
    font-size: 15px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin: 0 50px 50px;
    text-align:center;
`

const DetailDesc = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    margin-bottom:20px;
    max-width: 1000px;
    text-align:center;
    @media (min-width: 1280px) {
        flex-direction:row;
    }
`

const DetailDescContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    max-width:550px;
    margin: 0 40px;
`

const DetailDescContentTilte = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size: 32px;
    font-weight: 600;
    margin: 20px 0;
    width: 100%;
    text-align:left;
`

const DetailDescContentText = styled.div`
    font-size: 16px;
    line-height: 25px;
    margin-bottom:40px;
    text-align: left;
`

const DetailDescContentTable  = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

const DetailDescContentTableRow = styled.div`
    font-size: 14px;
    width:100%;
    display:flex;
    flex-direction:row;
    margin-bottom: 20px;
    text-align: left;
    @media (max-width: 660px) {
        flex-direction:column;
    }
`

const DetailDescContentTableItem = styled.div`
    flex: 1;
    display:flex;
    flex-direction:row;
`

const DetailDescContentTableItemTitle = styled.div`
    width: 80px;
`

const DetailDescContentTableItemContent = styled.div`
    flex: 1;
`

const DetailDescImage = styled.div`
    margin:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    padding:20px;
    box-shadow: 0 5px 20px 0 rgba(69,67,96,0.1);
    @media (max-width: 660px) {
        img{
            width:100%;

        }
    }
`

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        }
    }
}

export default connect(null,mapDispatchToProps)(AboutPage);
