import React from 'react';
import styled from 'styled-components';
import backImage from './img/back2.jpg';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { setActiveItem } from './store/actionCreator'

const flag = {
  visible: { opacity: 1, x: 0 },
  initial: { opacity: 0, x:'100%' }
}

class HomePage extends React.Component {
    componentDidMount(){
        this.props.setActiveItem('Home')
    }
    
    render() {
        return (
            <Container
                variants={flag}
                animate="visible"
                initial="initial"
                transition={{type:"spring", duration:2}}
            > 
                <Shadow/>
                <HelloText animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 2 }}>Hello</HelloText>
                <Presentation>
                    I Am&nbsp;
                    <motion.div  style={{overflow:'hidden', wordBreak:'break-all'}} animate={{width:'100%'}} initial={{width:'0%'}} transition={{duration: 3 ,repeat:'Infinity', repeatDelay: 0.5}}>
                        A FullStack Developer. 
                    </motion.div>
                    |
                </Presentation>
                <SkillList animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 2 }}>React+Redux&nbsp;●&nbsp;Express.js&nbsp;●&nbsp;NodeJs</SkillList>
            </Container>
        )
    }
}

const Container = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-image:url(${backImage});
    background-size:100% 100%;
    z-index: 2;
`

const Shadow = styled.div`
    position:absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    z-index:3;
`

const HelloText = styled(motion.div)`
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    z-index: 4;
`

const Presentation = styled.div`
    color: #fff;
    font-size: 50px;
    margin-bottom: 5px;
    z-index: 4;
    display:flex;
    flex-direction:row;
    white-space: nowrap;
    @media (max-width: 700px) {
        font-size: 30px;
    }
    @media (max-width: 560px) {
        font-size: 20px;
    }
`

const SkillList = styled(motion.div)`
    color: #fff;
    font-size: 16px;
    z-index: 4;
`

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        }
    }
}

export default connect(null,mapDispatchToProps)(HomePage);
