import Main from './components/Main';
import { createTheme, NextUIProvider } from '@nextui-org/react';
const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
});
function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <div>
        <Main />
      </div>
    </NextUIProvider>
  );
}

export default App;
