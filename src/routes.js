//Games
import GameListPlayer from "./containers/catalogo/games/GameList";
import RegisterInGame from "./containers/catalogo/games/RegisterInGame";
import PayForTransfer from "./containers/catalogo/games/PayForTransfer";
import GamesOfPlayer from "./containers/catalogo/games/GamesOfPlayer";
import MyGame from "./containers/catalogo/games/MyGame";
import GamesResults from "./containers/catalogo/games/GamesResults";
//User
import UserProfile from "./containers/catalogo/user/UserProfile";
import ChangePasswordForm from "./containers/auth/ChangePasswordForm";


const routes = [
  //PLAYERS 

  // Registros
  // {
  //   path: "/games",
  //   component: DashBoardPlayer,
  // },
  //Games
  {
    path: "/games",
    component: GameListPlayer,
  },
  {
    path: "/registerInGame/:game_id",
    component: RegisterInGame,
  },
  {
    path: "/payForTransfer/game/:game_id",
    component: PayForTransfer,
  },
  {
    path: "/gamesOfPlayer",
    component: GamesOfPlayer,
  },
  {
    path: "/gamesOfPlayer/:game_id",
    component: MyGame,
  },
  {
    path: "/gamesResults",
    component: GamesResults,
  },
  //UserProfile
  {
    path: "/user-profile",
    component: UserProfile,
  },
  {
    path: "/changePassword/:user_id",
    component: ChangePasswordForm
  }
];

export default routes;
