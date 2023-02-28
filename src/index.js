import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import AuthorizeProvider from './Store/AuthorizeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthorizeProvider>
<App />
</AuthorizeProvider>
);
