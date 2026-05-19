import Container from "./components/common/Container";

import Input from "./components/common/Input";

import Button from "./components/common/Button";

function App() {
  return (
    <div className="min-h-screen bg-secondary py-10">
      <Container>
        <div className="max-w-md space-y-6">
          <Input
            label="Email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <Input
            label="Username"
            placeholder="Invalid input"
            error="Username is required"
          />

          <Input
            label="Disabled"
            disabled
            placeholder="Disabled input"
          />

          <Button className="w-full">
            Continue
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default App;