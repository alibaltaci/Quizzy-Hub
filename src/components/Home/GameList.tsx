import { Link } from "react-router-dom"
import {home} from '../../data.json';
import { StyledGameList } from "./GameList.styles";

function GameList() {
  return (
    <StyledGameList>
        {home.gameList.map( game => (
            <div className="box">
                <Link key={game.path} to={game.path}>
                    <img src="images/bg-image.jpg" />
                    <p>
                        {game.gameName}
                    </p>
                </Link>
            </div>
        ))}
    </StyledGameList>
  )
}

export default GameList