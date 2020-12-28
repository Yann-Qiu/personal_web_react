import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setActiveItem,setDisplayNavBar } from './store/actionCreator'

class NavItem extends React.Component {
    setActive = (item) =>{
        this.props.setActiveItem(item)
        if(this.props.smallScreen){
            this.props.setDisplayNavBar(false)
        }
    }

    render() {
        return (
            <NavItemContainer 
                className={this.props.active === this.props.title ? 'active' : ''} 
                onClick={()=>{
                        this.setActive(this.props.title)
                        document.querySelector("#pageContainer").scrollTo(0,0)
                    }}
            >
                <NavItemIcon>
                    <span className="iconfont">{this.props.icon}</span>
                </NavItemIcon>
                <NavItemTitle>{this.props.title}</NavItemTitle>
            </NavItemContainer>
        )
    }
}

const NavItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;
    cursor: pointer;
`

const NavItemIcon = styled.div`
    width: 50px;
    height: 50px;
    background-color:#fff;
    box-shadow: 1px 1px 5px #cdcdcd, -3px -3px 3px #fafafa;
    :hover{
        box-shadow: inset 1px 1px 5px #cdcdcd, inset -3px -3px 3px #fafafa;
    }
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont{
        font-size:20px;
    }
`

const NavItemTitle = styled.div`
    font-weight:400;
`

function mapStateToProps(state) {
    return {
        active: state.active,
        smallScreen: state.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        },
        setDisplayNavBar(display){
            dispatch(setDisplayNavBar(display))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavItem);