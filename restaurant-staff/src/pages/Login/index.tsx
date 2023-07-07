import { FormEvent, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useApp } from "../../hooks/useApp";
import { Form, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  ErrorText,
  Input,
  Label,
  RegisterLink,
  SubmitButton,
  Title,
} from "./styles";

function Login() {
  const { isLoggedIn, attemptLogin } = useApp();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(false);
    setLoading(true);

    const target = event.target as HTMLFormElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const password = target.elements.namedItem("password") as HTMLInputElement;

    attemptLogin(email.value, password.value)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }
  return (
    <Container>
      <Title>Sign in to your account</Title>

      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              disabled={loading}
            />
          </div>
        </div>

        <SubmitButton type="submit">
          Sign in {loading && <Loader />}
        </SubmitButton>
      </Form>

      <RegisterLink>
        Not a member? <Link to="/register">Sign up</Link>
      </RegisterLink>

      {error && <ErrorText>An error occurred. Please try again.</ErrorText>}
    </Container>
  );
}

export default Login;
