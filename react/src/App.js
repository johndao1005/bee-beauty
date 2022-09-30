import { ThemeProvider} from '@mui/system';
import "./App.css";
import Router from "./pages/router/Router";
import theme from './theme'

function App() {
  //Apply theme and later on state manager if needed
  return (
    // <ThemeProvider theme={theme}>
        <Router/>
    // </ThemeProvider>
  );
}
export default App;
