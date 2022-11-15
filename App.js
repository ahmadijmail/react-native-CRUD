import Container from "./navigation/container";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer independent={true}>
      <Provider store={store}>
        <Container />
        </Provider>

      </NavigationContainer>
    </NativeBaseProvider>
  );
}
