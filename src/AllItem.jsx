import React from 'react';
import NavBar from './NavBar.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import SkillPage from './SkillPage.jsx'
import ExperiencePage from './ExperiencePage.jsx'
import CommentPage from './CommentPage.jsx'
import ProjectPage from './ProjectPage.jsx'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { setDisplayNavBar, setSmallScreen } from './store/actionCreator'

class AllItem extends React.Component {

    handleClick = ()=>{
        this.props.setDisplayNavbar(!this.props.displayNavbar);
    }

    onWindowResize = ()=>{
        const root = document.querySelector('#root')
        if(root !== null){
            const width = root.getBoundingClientRect().width
            if(width < 960){
                this.props.setDisplayNavbar(false)
                this.props.setSmallScreen(true)
            }
            else{
                this.props.setDisplayNavbar(true)
                this.props.setSmallScreen(false)
            }
        }
    }

    componentDidMount(){
        window.onload = this.onWindowResize
        window.addEventListener('resize',this.onWindowResize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.onWindowResize)
    }

    render() {
        return(
            <>
                <HashRouter>
                    <NavBar />
                    <MenuIcon onClick={this.handleClick} data_display={this.props.displayNavbar} isSmallScreen={this.props.isSmallScreen}>
                        <span className="iconfont">&#xe609;</span>
                    </MenuIcon>
                    <PageContainer id="pageContainer">
                        <Route path='/'  exact >
                                <HomePage />
                        </Route>
                        <Route path='/about'  exact>
                            <AboutPage />
                        </Route>
                        <Route path='/skill'  exact>
                            <SkillPage />
                        </Route>
                        <Route path='/experience'  exact>
                            <ExperiencePage />
                        </Route>
                        <Route path='/comment'  exact>
                            <CommentPage />
                        </Route>
                        <Route path='/project'  exact>
                            <ProjectPage />
                        </Route>
                    </PageContainer>
                </HashRouter>
            </>
        )
    }
}

const MenuIcon = styled.div`
    ${props => {
        if(props.data_display && props.isSmallScreen){
            return `margin: 10px 10px 10px 90px;display:flex;`
        }
        else if(!props.data_display && props.isSmallScreen){
            return `margin:10px;display:flex;`
        }
        else{
            return `display:none;`
        }
    }}
    position:absolute;
    width:50px;
    height: 50px;
    justify-content:center;
    align-items:center;
    z-index: 100;
    border-radius:30%;
    background-color:#fff;
    cursor: pointer;
    .iconfont{
        font-size:38px;
    }
`

const PageContainer = styled(motion.div)`
  width:100%;
  height:100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: visible;
`

function mapStateToProps(state) {
    return {
        active: state.active,
        displayNavbar : state.displayNavbar,
        isSmallScreen: state.isSmallScreen
    };
}

function mapDispatchToProps(dispatch){
    return{
        setDisplayNavbar(displayNavbar){
            dispatch(setDisplayNavBar(displayNavbar))
        },
        setSmallScreen(isSmallScreen){
            dispatch(setSmallScreen(isSmallScreen))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllItem);