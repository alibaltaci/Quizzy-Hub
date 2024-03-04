import HangMan from "./pages/HangMan";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import QuizzyHub from "./pages/QuizzyHub";
import TicTacToe from "./pages/TicTacToe";

export interface Route {
    name: string;
    path?: string;
    element: JSX.Element;
    children?: Route[];
    index?: boolean | undefined;
  }

const routes: Route[] = [
    {
        name: 'home',
        path: '/',
        element: <HomeLayout />,
        children:[
            {
                name: 'index',
                index: true,
                element: <Home />
            },
            {
                name: 'quizzyHub',
                path: 'quizzy-hub',
                element: <QuizzyHub />
            },
            {
                name: 'ticTacToe',
                path: 'tic-tac-toe',
                element: <TicTacToe />
            },
            {
                name: 'hangMan',
                path: 'hang-man',
                element: <HangMan />
            },
        ]
    },
]

const pageMap = (routes: Route[]): Route[] => routes.map( route=> {
    if(route?.children){
        route.children = pageMap(route.children) 
    }
    return route;
});

export default pageMap(routes);