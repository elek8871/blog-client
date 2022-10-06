import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function NewBounty (){
    // state to hold form
    const [form, setForm]= useState({
        name: " ",
        wantedFor: " ",
        ship: " ",
        client: " ",
        reward: 0,
        lastSeen: " ",
        captured: false
    })
    const [errorMessage, setErrorMessage] = useState(" ")
    const navigate = useNavigate()

     const handleSubmit = async e =>{
        try{
            e.preventDefault()
            // post form data to backend API -where yo want to post, what you are posting
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/bounty`, form)
            // nav back to bounties
            navigate("/bounties")

        }catch(err){
            console.warn(err)
            if(err.response){
                setErrorMessage(err.response.data.message)
            }
        }

     }

    // submit event handler
    return(
        <div>
            <h1> New Bounty</h1>
            <p>{errorMessage}</p>
            <form onSubmit={handleSubmit}> 

                <div>
                    <label htmlFor="name"> Name :</label>
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange= {e => setForm({ ...form, name: e.target.value})}
                    />
                    </div>

                    <div>
                    <label htmlFor="wantedFor"> Wanted For :</label>
                    <input
                        type="text"
                        id="name"
                        value={form.wantedFor}
                        onChange= {e => setForm({ ...form, wantedFor: e.target.value})}
                    />
                    </div>

                    <div>
                    <label htmlFor="client"> Client :</label>
                    <input
                        type="text"
                        id="client"
                        value={form.client}
                        onChange= {e => setForm({ ...form, client: e.target.value})}
                    />
                    </div>

                    <div>
                    <label htmlFor="reward"> Reward :</label>
                    <input
                        type="number"
                        id="reward"
                        value={form.reward}
                        onChange= {e => setForm({ ...form, reward: e.target.value})}
                    />
                    </div>

                    <div>
                    <label htmlFor="lastSeen"> Last Seen At :</label>
                    <input
                        type="text"
                        id="lastSeen"
                        value={form.lastSeen}
                        onChange= {e => setForm({ ...form, lastSeen: e.target.value})}
                    />
                    </div>

                    <div>
                    <label htmlFor="ship"> Ship :</label>
                    <input
                        type="text"
                        id="ship"
                        value={form.ship}
                        onChange= {e => setForm({ ...form, ship: e.target.value})}
                    />
                    </div>

                    <button type="submit"> Create </button>
                </form>
        </div>
    )
}