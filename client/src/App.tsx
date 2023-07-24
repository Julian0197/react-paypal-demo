
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider options={{ clientId: "test" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}

export default App;
