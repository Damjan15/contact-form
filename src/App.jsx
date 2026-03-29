import Input from "./components/ui/Input";

function App() {
  return (
    <>
      <h1 className="mb-8">Contact Form</h1>
      <Input id="email" label="Email Address" type="email" required />
    </>
  );
}

export default App;
