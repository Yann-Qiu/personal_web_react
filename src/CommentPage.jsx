import React from 'react';
import styled from 'styled-components';
import backImage from './img/title-decoration.png';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { setActiveItem } from './store/actionCreator'

const flag = {
  visible: { opacity: 1, x: 0 },
  initial: { opacity: 0, x:'100%' }
}

class CommentPage extends React.Component {
    componentDidMount(){
        this.props.setActiveItem('Comment')
    }

    render() {
        return (
            <Container
                variants={flag}
                animate="visible"
                initial="initial"
                transition={{type:"spring", duration:2}}
            > 
                <CommentTitleContainer>
                    <CommentTitle>
                        Manager's Says
                    </CommentTitle>
                    <img style={{position:'absolute'}} src={backImage} alt="background"></img>                
                </CommentTitleContainer>
                <CommentShortDesc>
                    These are the comments which I received when my intership was finished.
                </CommentShortDesc>
                <CommentList>
                    <CommentListRow>
                        <CommentListItem>
                            <CommentListItemWriter>Via Michel</CommentListItemWriter>
                            <CommentListItemText>
                                " Quoiqu'il en soit, je tenais à te remercier pour la grande aide que tu nous a apporté dans ce 
                                développement, qui a été mené avec un efficacité remarquable !<br/>Je voulais mettre en avant ta 
                                disponibilité, ta réaction, ta gentillesse et bien évidemment ton intelligence et ton grand 
                                professionnalisme.<br/>Nuls doute que nous espérons tous pouvoir te revoir parmi nous à I'avenir 
                                mais quoiqu'il arive, je te souhaite le meilleur dans la réalisation de tes futurs projets ! "
                            </CommentListItemText>
                        </CommentListItem>
                        <CommentListItem>
                            <CommentListItemWriter>Via Jérôme</CommentListItemWriter>
                            <CommentListItemText>
                                " Ce fut un plaisir pour nous, notamment ton autonomie car comme tu as sans doute pu le constater                                    
                                nous sommes bien occupés !<br/>Bravo pour le travail réalisé, et aussi pour avoir plutôt bien compris 
                                nos spécifications orales plutôt qu'écrites ! Très belle performance ! "
                            </CommentListItemText>
                        </CommentListItem>
                    </CommentListRow>
                    <CommentListRow>
                        <CommentListItem>
                            <CommentListItemWriter>Via Arnaud</CommentListItemWriter>
                            <CommentListItemText>
                                " Un grand merci pour ton super travail sur I'onboarding de 3DStory : tu nous as beaucoup aidé sur ce 
                                 sujet, et tu as fait un excellent travail ! <br/>Je te souhaite bonne chance et bon courage pour la 
                                 suite de tes projets "
                            </CommentListItemText>
                        </CommentListItem>
                        <CommentListItem>
                            <CommentListItemWriter>Via Laurence</CommentListItemWriter>
                            <CommentListItemText>
                                " c'est avec regret que je vais te "voir" partir. Je regrette que cette année particulière 
                                ne m'ait pas permis de te rencontrer《physiquement》。<br/>J'ai beaucoup apprécié de pouvoir 
                                collaborer avec toi : sérieux, compétence, disponibilité, réactivite, eficacité... tu possèdes 
                                toutes les qualités et les compétences nécessaires pour réussir professionnellement !<br/> J'espere 
                                que de ton côté, ton stage chez Dassault Systèmes t'aura été bénéfique. <br/>J'espère sincerement te 
                                voir revenir à DS bientôt (à la User Assistance :D si possible pour continuer à travailler avec 
                                toi !). En tous cas, oû que tu alls, tu seras une vraie valeur ajoutee dans une équipe. <br/>Je te 
                                souhaite beaucoup de succes dans ta future carrière, ainsi que dans ta vie personnelle. "
                            </CommentListItemText>
                        </CommentListItem>
                    </CommentListRow>
                </CommentList>
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
    z-index: 2;
    padding: 80px 0;
    background-color: #f1f3f6;
`

const CommentTitleContainer = styled.div`
    margin-bottom: 25px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const CommentTitle = styled.div`
    font-size: 40px;
    font-weight: 600;
`

const CommentShortDesc = styled.div`
    line-height: 1.6;
    font-size: 15px;
    margin:30px 20px;
    text-align:center;
`

const CommentList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:50px 0;
`

const CommentListRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media (max-width: 650px) {
        flex-direction:column;
    }
`

const CommentListItem = styled.div`
    max-width:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    margin: 15px 15px 15px 40px;
    padding: 30px 40px 40px 35px;
    background: #f1f3f6;
    border-radius: 8px;
    box-shadow: 3px 3px 3px #dfdfdf, -3px -3px 3px #fafafa;
`

const CommentListItemWriter = styled.div`
    font-size: 17px;
    color: #222;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #DDD;
`

const CommentListItemText = styled.div`
    font-size: 13px;
    color: #585858;
    line-height: 24px;
    font-style: italic;
`

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem(item){
            dispatch(setActiveItem(item)); 
        }
    }
}

export default connect(null,mapDispatchToProps)(CommentPage);