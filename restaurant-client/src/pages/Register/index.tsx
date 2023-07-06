import { FormEvent, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import {
  ErrorMessage,
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterFormWrapper,
  RegisterInput,
  RegisterLabel,
  RegisterTitle,
  SignInLink,
} from "./styles";

function Register() {
  const { isLoggedIn, attemptRegister } = useApp();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  function isValidForm(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    if (firstName.length <= 2) {
      return {
        valid: false,
        message: "First name should be more than 2 characters",
      };
    }

    if (lastName.length <= 2) {
      return {
        valid: false,
        message: "Last name should be more than 2 characters",
      };
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email) || email.length < 9) {
      return { valid: false, message: "Invalid email format" };
    }

    if (password.length < 5) {
      return {
        valid: false,
        message: "Password should be at least 5 characters",
      };
    }

    return { valid: true, message: "" };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const firstName = target.elements.namedItem(
      "firstName"
    ) as HTMLInputElement;
    const lastName = target.elements.namedItem("lastName") as HTMLInputElement;
    const role = target.elements.namedItem("role") as HTMLInputElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const password = target.elements.namedItem("password") as HTMLInputElement;

    const validation = isValidForm(
      firstName.value,
      lastName.value,
      email.value,
      password.value
    );

    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    setLoading(true);
    setError(null);
    console.log(email);
    console.log(password);
    console.log(role);
    console.log(firstName);
    console.log(lastName);

    attemptRegister({
      email: email.value,
      password: password.value,
      role: role.value,
      firstName: firstName.value,
      lastName: lastName.value,
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setError("There was an error during registration. Please try again.");
        console.log(e);
      })
      .finally(() => setLoading(false));
  }
  return (
    <RegisterContainer>
      <RegisterFormWrapper>
        <RegisterTitle>Create an account</RegisterTitle>

        <RegisterForm onSubmit={handleSubmit}>
          <RegisterLabel htmlFor="firstName">First Name</RegisterLabel>
          <div>
            <RegisterInput
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              disabled={loading}
            />
          </div>

          <RegisterLabel htmlFor="lastName">Last Name</RegisterLabel>
          <div>
            <RegisterInput
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              disabled={loading}
            />
          </div>

          <RegisterLabel htmlFor="email">Email address</RegisterLabel>
          <div>
            <RegisterInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={loading}
            />
          </div>

          <RegisterLabel htmlFor="password">Password</RegisterLabel>
          <div>
            <RegisterInput
              id="password"
              name="password"
              type="password"
              minLength={5}
              maxLength={20}
              autoComplete="new-password"
              required
              disabled={loading}
            />
          </div>

          <RegisterLabel htmlFor="password">Password</RegisterLabel>
          <div>
            <RegisterInput id="role" name="role" type="hidden" value="USER" />
          </div>

          <RegisterButton type="submit">
            Submit {loading && <Loader />}
          </RegisterButton>
        </RegisterForm>

        <p>
          Already a registered? <SignInLink to="/login">Sign in</SignInLink>
        </p>
        {error && (
          <ErrorMessage>
            {" "}
            An error has ocurred in the registration process{" "}
          </ErrorMessage>
        )}
      </RegisterFormWrapper>
    </RegisterContainer>
  );
}

export default Register;
