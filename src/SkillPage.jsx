import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bgImage from './img/service-bg.jpg'
import { connect } from 'react-redux';
import { setActiveItem } from './store/actionCreator'
import { keyframes } from 'styled-components';

const flag = {
  visible: { opacity: 1, x: 0 },
  initial: { opacity: 0, x:'100%' }
}

class SkillPage extends React.Component {
    componentDidMount(){
        this.props.setActiveItem('Skill')
    }

    handleHover = () => {
        console.log(this)
        this.className = this.className === undefined ? 'test' :  this.className += ' test'
    }

    render() {
        return (
            <Container 
                variants={flag}
                animate="visible"
                initial="initial"
                transition={{type:"spring", duration:2}}
            > 
                <SkillTitle>
                    MY TECHNICAL SKILL
                </SkillTitle>
                <SkillShortDesc>
                    <div style={{textAlign: 'center'}}>
                        NodeJs, Express.js, Framework React+Redux+Router, Html&Css, Js/Jquery, Bootstrap, PHP, Java, Python, C++, C.
                    </div>
                    <div>
                        Eager to learn new technology and work in team.
                    </div>        
                </SkillShortDesc>
                <SkillPaint>
                    <SkillPaintItem>
                        <motion.svg width="300px" height="20px">
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 1 }}
                                strokeWidth="30"
                                stroke="#fff"
                            ></motion.path>
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 0.9 }}
                                transition={{ duration: 1.5 }}
                                strokeWidth="31"
                                stroke="#1D7DB1"
                            ></motion.path>
                        </motion.svg>
                        <SkillName>
                            NodeJS
                        </SkillName>
                    </SkillPaintItem>
                    <SkillPaintItem>
                        <motion.svg width="300px" height="20px">
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 1 }}
                                strokeWidth="30"
                                stroke="#fff"
                            ></motion.path>
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 0.8 }}
                                transition={{ duration: 1.5 }}
                                strokeWidth="31"
                                stroke="#1D7DB1"
                            ></motion.path>
                        </motion.svg>
                        <SkillName>
                            React+Redux+Router
                        </SkillName>
                    </SkillPaintItem>
                </SkillPaint>
                <SkillPaint>
                    <SkillPaintItem>
                        <motion.svg width="300px" height="20px">
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 1 }}
                                strokeWidth="30"
                                stroke="#fff"
                            ></motion.path>
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 0.85 }}
                                transition={{ duration: 1.5 }}
                                strokeWidth="31"
                                stroke="#1D7DB1"
                            ></motion.path>
                        </motion.svg>
                        <SkillName>
                            JS/TypeScript
                        </SkillName>
                    </SkillPaintItem>
                    <SkillPaintItem>
                        <motion.svg width="300px" height="20px">
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 1 }}
                                strokeWidth="30"
                                stroke="#fff"
                            ></motion.path>
                            <motion.path
                                d={'M 0,0 L 300,0'}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 0.9 }}
                                transition={{ duration: 1.5 }}
                                strokeWidth="31"
                                stroke="#1D7DB1"
                            ></motion.path>
                        </motion.svg>
                        <SkillName>
                            HTML+CSS
                        </SkillName>
                    </SkillPaintItem>
                </SkillPaint>
                <SocialList>
                    <SocialListItem href="https://github.com/qs4091" target="_blank" transition={{duration: 1}} onMouseEnter={this.handleHover}>
                        <SocialListItemLeft>
                            <SocialListItemLeftCircle className="circle">
                                01
                                <SocialListItemLeftCircleIcon>
                                    <span className="iconfont">&#xe600;</span>
                                </SocialListItemLeftCircleIcon>
                            </SocialListItemLeftCircle>
                        </SocialListItemLeft>
                        <SocialListItemRight>
                            <SocialListItemRightTitle>
                                Github
                            </SocialListItemRightTitle>
                            <SocialListItemRightText>
                                My count Github, stored all my project.
                            </SocialListItemRightText>
                        </SocialListItemRight>
                    </SocialListItem>
                    <SocialListItem href="https://www.linkedin.com/in/yanfeng-qiu-3404741a3/" target="_blank" transition={{duration: 1}}  whileHover={{color:"#fff"}}>
                        <SocialListItemLeft>
                            <SocialListItemLeftCircle className="circle">
                                02
                                <SocialListItemLeftCircleIcon>
                                    <span className="iconfont">&#xe601;</span>
                                </SocialListItemLeftCircleIcon>
                            </SocialListItemLeftCircle>
                        </SocialListItemLeft>
                        <SocialListItemRight>
                            <SocialListItemRightTitle>
                                Linkded In
                            </SocialListItemRightTitle>
                            <SocialListItemRightText>
                                My count Linkded In, with all my information.
                            </SocialListItemRightText>
                        </SocialListItemRight>
                    </SocialListItem>
                </SocialList>
            </Container>
        )
    }
}

const Container = styled(motion.div)`
    padding: 80px 40px;
    width: 100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: #f1f3f6;
    z-index: 2;
    background-image:url(${bgImage});
    background-size:100% 100%;
    color: #fff;
`

const SkillTitle = styled.div`
    margin-bottom: 25px;
    font-weight: 600;
    font-size:40px;
    text-align:center;
`

const SkillShortDesc = styled.div`
    line-height: 1.6;
    font-size: 15px;
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
`

const SkillPaint = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 800px) {
        flex-direction:column;
    }
`

const SkillPaintItem = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:500px;
    height: 200px;
    flex-direction:column;
`

const SkillName = styled.div`
    font-size:20px;
    font-weight:700;
    margin-top:30px;
`

const SocialList = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media (max-width: 800px) {
        flex-direction:column;
    }
`

const bgColor = keyframes` 
    from {
        background-color: #3e66db;
        color:#5374de;
    }

    to {
        background-color: #FF9E2B;
        color:#fff;
    }
}
`

const SocialListItem = styled(motion.a)`
    margin:20px;
    background-color:#3b5ed4;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 30px;
    cursor: pointer;
    border-radius: 20px;
    :hover{
        .circle{
            animation:${bgColor} 1s ease;
            animation-fill-mode:forwards;
        }
    }
`

const SocialListItemLeft = styled.div`
    width:200px;
`

const SocialListItemLeftCircle = styled(motion.div)`
    width:170px;
    height:170px;
    border-radius:50%;
    background-color:#3e66db;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 60px;
    color: #5374de;
`

const SocialListItemLeftCircleIcon = styled.div`
    width: 80px;
    height:80px;
    position:absolute;
    right: -10px;
    bottom: -10px;
    background-color:#fff;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    .iconfont{
        font-size: 36px;
        color: #FF9E2B;
    }
`

const SocialListItemRight = styled.div`
    flex:1;
`

const SocialListItemRightTitle = styled.div`
    color: #fff;
    font-weight: 500;
    font-size: 1.75rem;
    margin-bottom: 15px;
`

const SocialListItemRightText = styled.div`
    color: #fff;
    line-height: 1.6;
    font-size: 15px;
`

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        }
    }
}

export default connect(null,mapDispatchToProps)(SkillPage);