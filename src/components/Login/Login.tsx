import React from "react";
import { Grid, Form, Button } from "semantic-ui-react";

interface LoginProps {
  onButtonClick: (componentName: string) => void;
}

const Login: React.FC<LoginProps> = ({ onButtonClick }) => {
  return (
    <Grid.Column
      style={{
        width: "350px",
        textAlign: "center",
        padding: "0 30px 50px 30px",
      }}
    >
      <Button
        content="Need help?"
        style={{
          background: "none",
          border: "none",
          float: "right",
          cursor: "pointer",
          fontSize: "10px",
        }}
        onClick={() => onButtonClick("help")}
      />

      <Grid>
        <Grid.Row>
          <p>Log in</p>
        </Grid.Row>

        <Form>
          <Grid.Row>
            <Form.Input fluid label="Email" placeholder="joe@email.com" error />
            <Form.Input
              fluid
              label="Password"
              placeholder="Enter your Password"
              type="password"
              error
            />
          </Grid.Row>

          <Grid.Row>
            <Button
              basic
              content="Forgot password?"
              style={{
                background: "none",
                border: "none",
                float: "right",
                cursor: "pointer",
                fontSize: "10px",
              }}
              onClick={() => onButtonClick("forgotPassword")}
            />
          </Grid.Row>

          <Grid.Row style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <Button
              type="submit"
              content="Login"
              style={{
                borderRadius: "20px",
                padding: "10px 30px",
                marginTop: "30px",
                backgroundColor: "#1aebb6",
                border: "none",
              }}
            />
          </Grid.Row>
        </Form>
      </Grid>
    </Grid.Column>
  );
};

export default Login;
