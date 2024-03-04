import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './App.styles.ts'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <BrowserRouter>
            <App />
            <GlobalStyle />
        </BrowserRouter>
    </>
)
