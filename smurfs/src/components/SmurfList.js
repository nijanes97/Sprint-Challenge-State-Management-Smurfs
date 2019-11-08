import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs, postSmurfs } from '../actions'
import SmurfForm from './SmurfForm';
import Styled from 'styled-components'

const Smurf = Styled.div
`
    width: 200px;
    height: 100px;
    background: lightblue;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 5px;
    opacity: 90%;
    h2{
        margin: 0 auto;
        font-size: 15px;
    }
`
const SmurfsList = Styled.div
`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`
const AppDiv = Styled.div
`
    display: flex;
    flex-flow: column nowrap;
    button{
        width: 200px;
        height: 35px;
        padding:0.35em 1.2em;
        border:1px solid gray;
        margin: 0 auto;
        border-radius:0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-weight:300;
        font-size: 20px;
        color:#000000;
        text-align:center;
        transition: all 0.2s;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    button:hover{
        background-color:#FFFFFF;
    }
    button:active{
        background: gray;
    }
    h1{
        background: white;
        margin: 0 auto;
        width: 100%;
        height: 50px;
        opacity: 90%;
        position: fixed;
        z-index: 4;
    }
`

function SmurfList(props) {
    console.log('SmurfList', props);
    return (
        <AppDiv>
            <h1>Smurf Village Roster</h1>
            <SmurfForm postSmurfs={props.postSmurfs} />
            <button onClick={() => props.fetchSmurfs()}>Get Smurf List</button>
            {props.isFetching && <div>loading...</div>}
            {props.error && <div>{props.error.message}</div>}
            <SmurfsList>
            {props.smurfs.length > 0 &&
                props.smurfs.map(s => {
                    return(
                        <Smurf>
                            <h2>{s.name}</h2>
                            <p>Age: {s.age}</p>
                            <p>Height: {s.height}</p>
                        </Smurf>
                    )
                })}
            </SmurfsList>
        </AppDiv>
    );
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        isPosting: state.isPosting,
        smurfs: state.smurfs,
        newSmurf: state.newSmurf,
        error: state.error
    }
}

export default connect( 
    mapStateToProps,
    { fetchSmurfs, postSmurfs }
)(SmurfList);