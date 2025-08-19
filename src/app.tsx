import { Text } from "./components/text";

const App = () => {
  return (
    <>
      <h1 className="text-green-dark">Vite + React</h1>
      <Text as="p" variant="body-md-bold" className="text-pink-base">
        Edit <code>src/app.tsx</code> and save to test HMR updates.
      </Text>
    </>
  );
};

export { App };
