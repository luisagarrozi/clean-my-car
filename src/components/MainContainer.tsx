import React, { useState } from "react";
import { Container, Grid, Segment, Image } from "semantic-ui-react";
import logo from "../assets/icons/Logo.svg";
import Login from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import Help from "./Login/Help";

const MainContainer: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState("login");

  const handleButtonClick = (componentName: string) => {
    setCurrentComponent(componentName);
  };

  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case "login":
        return <Login onButtonClick={handleButtonClick} />;
      case "forgotPassword":
        return <ForgotPassword />;
      case "help":
        return <Help />;
      default:
        return <Login onButtonClick={handleButtonClick} />;
    }
  };

  return (
    <Container style={{ paddingTop: "100px" }}>
      <Segment>
        <Grid
          columns={2}
          divided
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid.Column
            style={{
              backgroundColor: "#1aebb6",
              width: "150px",
              textAlign: "center",
              padding: "50px 30px",
            }}
          >
            <Image src={logo} alt="Logo" width={80} />
            <p style={{ fontSize: "20px" }}>CleanMyCar</p>
            <p>India's first waterless car cleaning company</p>
          </Grid.Column>

          {renderCurrentComponent()}
        </Grid>
      </Segment>
    </Container>
  );
};

export default MainContainer;
