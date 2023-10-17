import App from './_c/App';
import { ReactContextProvider } from './_c/context/ReactContextProvider';

export default function WebOscRepeater() {
    return (
        <ReactContextProvider>
            <App />
        </ReactContextProvider>
    )
}