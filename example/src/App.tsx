
import './App.css';
import Example from './views/Example';
import Banner from './components/Banner';
import {GridThemeProvider} from '@acrool/react-grid';
import Button from './components/Button';
import TextField from './components/TextField';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>


            </div>
        </GridThemeProvider>
    );

}

export default App;
