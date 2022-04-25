import { createRoot } from 'react-dom/client';
import './index.css';
import { GlobalStyles } from './styled-components/GlobalStyles.styles';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);
root.render([<GlobalStyles />,<App />]);