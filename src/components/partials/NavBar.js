import { Link } from "react-router-dom"

export default function NavBar (){
    return(
        <nav>
            <ul style= {{ listStyleType: "none" }}>
                <li>
                    <Link to ='/'> Home </Link>
                </li>
    
                <li>
                    <Link to ='/bounties'> All Bounties </Link>
                </li>
            
                <li>
                    <Link to ='/bounties/new'> Create Bounty </Link>
                </li>
            </ul>
        </nav>
    )
}