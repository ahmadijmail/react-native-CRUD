import Container from "./navigation/container";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer independent={true}>
        <Container />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
