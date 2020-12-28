import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dec from './img/16.png'
import photo3 from './img/photo3.jpg'
import ds from './img/ds.jpg'
import { connect } from 'react-redux';
import { setActiveItem } from './store/actionCreator'

const flag = {
  visible: { opacity: 1, x: 0 },
  initial: { opacity: 0, x:'100%' }
}

function getLength(){
    if(document.querySelector('#firstWorkExperienceItem') !== null){
        const height = document.querySelector('#firstWorkExperienceItem').getBoundingClientRect().height
        return `M 10 12 L 11 ${12 + height + 5}`
    }
}

class ExperiencePage extends React.Component {

    componentDidMount(){
        if(document.querySelector('#timeline') !== null){
            document.querySelector('#timeline').setAttribute('d',getLength());
        }
        this.props.setActiveItem('Experience')
    }
    
    render() {
        return (
            <Container
                variants={flag}
                animate="visible"
                initial="initial"
                transition={{type:"spring", duration:2}}
            >   
            <ExperienceEducation>
                <ExperienceEduImage />
                <ExperienceContent>
                    <ExperienceTitle>My Education</ExperienceTitle>
                    <ExperienceList>
                        <ExperienceListItem>
                            <ExperienceListItemIcon>
                                <svg style={{overflow:"visible"}}>
                                    <circle cx="10.5" cy="13" r="6" fill="#ff2e59"></circle>
                                    <path d="M 10 12 L 11 325" strokeWidth="2" stroke="#ff2e59" strokeDasharray="2 3"></path>
                                </svg>
                            </ExperienceListItemIcon>
                            <ExperienceListItemContent>
                                <ExperienceListItemContentDiplome style={{color:'#ff2e59'}}>Engineer Diploma(master)</ExperienceListItemContentDiplome>
                                <ExperienceListItemContentTime>2019.9-now</ExperienceListItemContentTime>
                                <ExperienceListItemContentSchool>L'Université de Technologie de Troyes, France</ExperienceListItemContentSchool>
                            </ExperienceListItemContent>
                        </ExperienceListItem>
                        <ExperienceListItem>
                            <ExperienceListItemIcon>
                                <svg>
                                    <circle cx="10.5" cy="13" r="6" fill="#fbbd41"></circle>
                                </svg>
                            </ExperienceListItemIcon>
                            <ExperienceListItemContent>
                                <ExperienceListItemContentDiplome style={{color:'#fbbd41'}}>Bachelor's Degree</ExperienceListItemContentDiplome>
                                <ExperienceListItemContentTime>2016.9-2019.6</ExperienceListItemContentTime>
                                <ExperienceListItemContentSchool>U.T.S.E.U.S. of Shanghai University, Shanghai</ExperienceListItemContentSchool>
                            </ExperienceListItemContent>
                        </ExperienceListItem>
                        <ExperienceListItem>
                            <ExperienceListItemIcon>
                                <svg>
                                    <circle cx="10.5" cy="13" r="6" fill="#8b2ee1"></circle>
                                </svg>
                            </ExperienceListItemIcon>
                            <ExperienceListItemContent>
                                <ExperienceListItemContentDiplome style={{color:'#8b2ee1'}}>Gaokao</ExperienceListItemContentDiplome>
                                <ExperienceListItemContentTime>2016.6</ExperienceListItemContentTime>
                                <ExperienceListItemContentSchool>Huamei Experimental School, Guangdong</ExperienceListItemContentSchool>
                            </ExperienceListItemContent>
                        </ExperienceListItem>
                    </ExperienceList>
                </ExperienceContent>
            </ExperienceEducation>
            <ExperienceWork>
                <ExperienceContent>
                    <ExperienceWorkTitle>
                        My Work
                    </ExperienceWorkTitle>
                    <ExperienceWorkContent>
                        <ExperienceWorkContentTitle>
                            Intership at Dassault Systeme
                        </ExperienceWorkContentTitle>
                        <ExperienceListItem id="firstWorkExperienceItem">
                            <ExperienceListItemIcon>
                                <svg style={{overflow:"visible"}}>
                                    <circle cx="10.5" cy="13" r="6" fill="#ff2e59"></circle>
                                    <path d="M 10 12 L 11 165" id="timeline" strokeWidth="2" stroke="#ff2e59" strokeDasharray="2 3"></path>                           
                                </svg>
                            </ExperienceListItemIcon>
                            <ExperienceListItemContent>
                                <ExperienceListItemContentDiplome style={{color:'#ff2e59'}}>User Portail ( Fullstack Developer )</ExperienceListItemContentDiplome>
                                <ExperienceListItemContentTime>2020.7 - 2020.10</ExperienceListItemContentTime>
                                <ExperienceListItemContentSchool>
                                    NodeJS, Express.js, JQuery, Html + Css ..<br/>
                                    Responsvie web design, develope back-end API, Analyze XML files with NodeJS
                                </ExperienceListItemContentSchool>
                            </ExperienceListItemContent>
                        </ExperienceListItem>
                        <ExperienceListItem>
                            <ExperienceListItemIcon>
                                <svg style={{overflow:"visible"}}>
                                    <circle cx="10.5" cy="13" r="6" fill="#fbbd41"></circle>                           
                                </svg>
                            </ExperienceListItemIcon>
                            <ExperienceListItemContent>
                                <ExperienceListItemContentDiplome style={{color:'#fbbd41'}}>3DStory Guided Tour ( Front-end Developer )</ExperienceListItemContentDiplome>
                                <ExperienceListItemContentTime>2020.10 - 2020.12</ExperienceListItemContentTime>
                                <ExperienceListItemContentSchool>
                                    Reactjs, Redux, Styled-component, Framer-motion ...<br/>
                                    Develope a Guided Tour for a web application,as well as unit test<br/>
                                    ( check action in Redux and give a timely feedback with animation )
                                </ExperienceListItemContentSchool>
                            </ExperienceListItemContent>
                        </ExperienceListItem>
                    </ExperienceWorkContent>
                </ExperienceContent>
                <ExperienceWorkImage />
            </ExperienceWork>
            </Container>
        )
    }
}


window.onresize = function(){
    if(document.querySelector('#timeline') !== null){
        document.querySelector('#timeline').setAttribute('d',getLength());
    }
}

const Container = styled(motion.div)`
    padding:80px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-image:url(${dec});
    background-position:top right;
    background-repeat:no-repeat;
    z-index: 2;
    overflow-y: visible;
`

const ExperienceEducation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    width:100%;
    @media (max-width: 1024px) {
        flex-direction:column-reverse;
    }
`

const ExperienceEduImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:500px;
    height:500px;
    border-radius:50%;
    background-image:url(${photo3});
    background-position:center center;
    background-size:100% 100%;
    @media (max-width: 640px) {
        width:300px;
        height:300px;
    }
`

const ExperienceContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
    padding:40px 80px;
`

const ExperienceTitle = styled.div`
    font-size: 50px;
    font-family: 'Archivo Black',sans-serif;
    color: #23233f;
    font-weight:bold;
    margin-bottom: 80px;
`

const ExperienceList = styled.div`
    display:flex;
    flex-direction:column;
`

const ExperienceListItem = styled.div`
    display:flex;
    flex-direction:row;
`

const ExperienceListItemIcon = styled.div`
    width:55px;
`

const ExperienceListItemContent = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
`

const ExperienceListItemContentDiplome = styled.div`
    font-size: 17px;
    margin-bottom: 8px;
    letter-spacing: .1px;
`

const ExperienceListItemContentTime = styled.div`
        font-size: 21px;
        color: #646168;
        letter-spacing: -0.4px;
        margin-bottom: 11px;
`

const ExperienceListItemContentSchool = styled.div`
        
`

const ExperienceWork = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    @media (max-width: 1024px) {
        flex-direction:column;
    }
`

const ExperienceWorkTitle = styled.div`
    font-size: 50px;
    font-family: 'Archivo Black',sans-serif;
    color: #23233f;
    font-weight:bold;
    margin-bottom: 40px;
`

const ExperienceWorkContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`

const ExperienceWorkContentTitle = styled.div`
    font-size: 17px;
    letter-spacing: 1px;
    font-weight: 700;
`

const ExperienceWorkImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:500px;
    height:500px;
    border-radius:50%;
    background-image:url(${ds});
    background-position:center center;
    background-repeat:no-repeat;
    background-size:50% 50%;
    @media (max-width: 640px) {
        width:300px;
        height:300px;
    }
`

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        }
    }
}

export default connect(null,mapDispatchToProps)(ExperiencePage);
