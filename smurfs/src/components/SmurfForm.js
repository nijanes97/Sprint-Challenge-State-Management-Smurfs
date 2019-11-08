import React, {useState} from 'react'
import Styled from 'styled-components'

const FormDiv = Styled.div
`
    margin: 0 auto;
    margin-top: 50px;
    background: lightblue;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 40%;
    height: 400px;
    form{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        input{
            width: 200px;
            height: 20px;
            margin: 10px;
        }
        button{
            width: 200px;
        }
    }
`

const SmurfForm = (props) => {
    const [addedSmurf, setAddedSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handler = e => {
        setAddedSmurf({ ...addedSmurf, [e.target.name]: e.target.value })
    }

    const submitChange = e => {
        props.postSmurfs(addedSmurf);
    }

    return(
        <FormDiv>
            <form onSubmit={submitChange}>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={handler}
                />
                <input
                    type='text'
                    placeholder='Age'
                    name='age'
                    onChange={handler}
                />
                <input
                    type='text'
                    placeholder='Height'
                    name='height'
                    onChange={handler}
                />
                <button type='submit'>Submit</button>
            </form>
        </FormDiv>
    )
}

export default SmurfForm;