import React from 'react';
import styled from 'styled-components';
import backImage from './img/09.png';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { setActiveItem } from './store/actionCreator'

const flag = {
  visible: { opacity: 1, x: 0 },
  initial: { opacity: 0, x:'100%' }
}

class ProjectPage extends React.Component {
    componentDidMount(){
        this.props.setActiveItem('Project')
    }

    render() {
        return (
            <Container
                variants={flag}
                animate="visible"
                initial="initial"
                transition={{type:"spring", duration:2}}
            > 
                <ProjectTitle>
                    <div>MY PROJECTS</div>
                </ProjectTitle>
                <DiviedLine>
                    <Line />
                </DiviedLine>
                <ProjectList>
                    <ProjectListRow>
                        <ProjectListItem whileHover={{backgroundColor:"#FF9E2B",color:"#fff"}} target="_blank" href="https://github.com/qs4091/webPersonnel">
                            <ProjectListItemIcon>
                                <span className="iconfont">&#xf2dc;</span>
                            </ProjectListItemIcon>
                            <ProjectListItemTitle>personal Web</ProjectListItemTitle>
                            <ProjectListItemText>
                                Responsive personal web built with bootstrap
                            </ProjectListItemText>
                        </ProjectListItem>
                        <ProjectListItem whileHover={{backgroundColor:"#FF9E2B",color:"#fff"}} target="_blank" href="https://github.com/qs4091/jianshu_React_Redux">
                            <ProjectListItemIcon>
                                <span className="iconfont">&#xe741;</span>
                            </ProjectListItemIcon>
                            <ProjectListItemTitle>website JiNSHU</ProjectListItemTitle>
                            <ProjectListItemText>
                                A website built with framework Reactjs+Redux+Router(just for compouter)
                            </ProjectListItemText>
                        </ProjectListItem>
                        <ProjectListItem whileHover={{backgroundColor:"#FF9E2B",color:"#fff"}} target="_blank" href="https://github.com/qs4091/rentCar">
                            <ProjectListItemIcon>
                                <span className="iconfont">&#xe6fa;</span>
                            </ProjectListItemIcon>
                            <ProjectListItemTitle>RentCar</ProjectListItemTitle>
                            <ProjectListItemText>
                                a projet built with PHP Framework Laravel( use several API: googleMap, weather, QRCode... )
                            </ProjectListItemText>
                        </ProjectListItem>
                    </ProjectListRow>
                    <ProjectListRow>
                        <ProjectListItem whileHover={{backgroundColor:"#FF9E2B",color:"#fff"}} target="_blank" href="https://github.com/qs4091/modelWebsite">
                            <ProjectListItemIcon>
                                <span className="iconfont">&#xe66e;</span>
                            </ProjectListItemIcon>
                            <ProjectListItemTitle>web model</ProjectListItemTitle>
                            <ProjectListItemText>
                                a website model for entreprise built with bootstrap and swiperJs
                            </ProjectListItemText>
                        </ProjectListItem>
                        <ProjectListItem whileHover={{backgroundColor:"#FF9E2B",color:"#fff"}} target="_blank" href="https://github.com/qs4091/filmSelector">
                            <ProjectListItemIcon>
                                <span className="iconfont">&#xe686;</span>
                            </ProjectListItemIcon>
                            <ProjectListItemTitle>filmSelector</ProjectListItemTitle>
                            <ProjectListItemText>
                                A responsive webiste for selecting film built by react+redux
                            </ProjectListItemText>
                        </ProjectListItem>
                        <ProjectListItem whileHover={{backgroundColor:"#FF9E2B",color:"#fff"}} target="_blank" href="https://github.com/qs4091/Listening_english">
                            <ProjectListItemIcon>
                                <span className="iconfont">&#xe707;</span>
                            </ProjectListItemIcon>
                            <ProjectListItemTitle>English Listening</ProjectListItemTitle>
                            <ProjectListItemText>
                                a website built with framework Reacjs+Router
                            </ProjectListItemText>
                        </ProjectListItem>
                        
                    </ProjectListRow>
                </ProjectList>
            </Container>
        )
    }
}

const Container = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-image:url(${backImage});
    background-color:#f5f5f5;
    background-repeat:no-repeat;
    background-position:bottom right;
    z-index: 2;
`

const ProjectTitle = styled.div`
    margin-top: 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 10px;
    font-weight: 300;
    color: #5b5963;
    font-size: 30px;
`

const DiviedLine = styled.div`
    display:flex;
    width:100%;
    height:20px;
    justify-content:center;
    align-items:center
`

const Line = styled.div`
    height:1.5px;
    width:60px;
    background-color: #666;
`

const ProjectList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const ProjectListRow = styled.div`
    margin:40px 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media (max-width: 960px) {
        flex-direction:column;
    }
`

const ProjectListItem = styled(motion.a)`
    max-width:350px;
    flex:1;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px 20px;
    margin:30px 20px;
    box-shadow:-6px 10px 40px rgba(0,0,0,0.06);
    background: #fff none repeat scroll 0 0;
    position:relative;
    color: #5b5963;
    :hover{
        .iconfont{
            color: #FF9E2B;
        }
    }
`

const ProjectListItemIcon = styled.div`
    height:80px;
    width:80px;
    border-radius:50%;
    background: #fff;
    box-shadow: -6px 10px 40px rgba(0,0,0,0.06);
    position:absolute;
    top:-40px;
    display:flex;
    justify-content:center;
    align-items:center;
    .iconfont{
        color: #2196f3;
        font-weight: 900;
        font-size: 30px;
    }
`

const ProjectListItemTitle = styled.div`
    padding-top: 30px;
    margin: 30px 0 15px;
    padding: 0;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
`

const ProjectListItemText = styled.div`
    text-align:center;
`

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        }
    }
}

export default connect(null,mapDispatchToProps)(ProjectPage);