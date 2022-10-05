import { useState, useEffect } from "react"
import axios from "axios"
import  { Link } from "react-router-dom"

// copy from home js
export default function Bounties (){
    const [bounties, setBounties] = useState([])
    // state for messages from backend
    const [errorMessage, setErrorMessage] = useState (" ")

    useEffect(()=>{
        const getBounties = async ()=>{
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounty`)
                console.log(response.data)
                setBounties(response.data)
            } catch(err){
                console.warn(err)
                if(err.response){
                    setErrorMessage(err.response.data.message)
                }
            }   
        }
        getBounties()
    }, [])

    const bountyLinks = bounties.map(bounty =>{
        return(
            <div key={bounty._id}>
                <Link to = {`/bounties/${bounty._id}`}>
                    {bounty.name}
                </Link>
            </div>
        )
    })
    return(
        <div>
            <h1> All Bounties:</h1>
            {bountyLinks}
            <p> {errorMessage}</p>
        </div>
    )
}