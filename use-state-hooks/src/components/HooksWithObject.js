import React, { useState } from 'react'

function HooksWithObject() {
    const [name, setName] = useState({firstname: "", lastname: ""});
    const [name1, setName1] = useState({firstname1: "", lastname1: ""});

    return (
        <div>
            <p>It will not work properly</p>
            <small>this is because useState does not automatically marge and update state variable.</small>
            <form>
                <input type='text' 
                    value={name.firstname}
                    onChange={e => setName({firstname: e.target.value})} />

                <input type='text' 
                    value={name.lastname}
                    onChange={e => setName({lastname: e.target.value})} />
            </form>
            
            <h6>Your First Name: {name.firstname} and Last Name: {name.lastname}</h6>

            <br />
            <br />
            <p>It will work properly</p>
            <small>...name1, firstname1: e.target.value: it first copy all properties in name1 object then just update firstname1</small>
            <br />
            <small>...name1, lastname1: e.target.value: it first copy all properties in name1 object then just update lastname1</small>

            <form>
                <input type='text' 
                    value={name1.firstname1}
                    onChange={e => setName1({...name1, firstname1: e.target.value})} />

                <input type='text' 
                    value={name1.lastname1}
                    onChange={e => setName1({...name1, lastname1: e.target.value})} />
            </form>
            <h6>Your First Name: {name1.firstname1}1 and Last Name: {name1.lastname1}</h6>
        </div>
    )
}

export default HooksWithObject