import React from 'react';
import styled from 'styled-components';
import './font/iconfont.css';
import NavItem from './NavItem.jsx'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const v = {
    visible: { x: 0 },
    hidden: { x: -85 }
}

class NavBar extends React.Component {
    render() {
        return ( 
        <Panel 
            id="navBar" 
            data_display={this.props.displayNavBar} 
            variants={v}
            animate={ this.props.displayNavBar ? 'visible' : 'hidden'}
        >
            <Logo>
                <div style={{'fontSize':"48px","fontWeight":"bold"}}>Y</div>
                <div>Yanfeng</div>
            </Logo>
            <NavList>
                <Link to='/'>
                    <NavItem title="Home" icon="&#xe602;" />
                </Link>
                <Link to='/about'>
                    <NavItem title="About" icon="&#xf2dc;" />
                </Link>
                <Link to='/skill'>
                    <NavItem title="Skill" icon="&#xe625;" />
                </Link>   
                <Link to='/experience'> 
                    <NavItem title="Experience" icon="&#xe683;" />
                </Link>
                <Link to='/comment'> 
                    <NavItem title="Comment" icon="&#xe683;" />
                </Link> 
                <Link to='/project'> 
                    <NavItem title="Project" icon="&#xe714;" />
                </Link>
            </NavList>
        </Panel>
        );
    }
}

const Panel = styled(motion.div) `
    flex-direction:column;
    width: 80px;
    height: 100%;
    background-color:#fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    position: fixed;
    z-index: 100;
    box-shadow: 2px 0px 5px #b9b9b9;
`

const Logo = styled.div`
    height: 100px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const NavList = styled.div`
    flex:1;
    height: 100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding-top:20px;
    align-items:center;
`

function mapStateToProps(state) {
    return {
        active: state.active,
        displayNavBar: state.displayNavbar
    };
}

export default connect(mapStateToProps,null)(NavBar);