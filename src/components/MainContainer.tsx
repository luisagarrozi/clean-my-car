import React from "react";
import {
  Container,
  Grid,
  Segment,
  Image,
} from "semantic-ui-react";
import logo from "../assets/icons/Logo.svg";
import Login from "./Login";

const MainContainer: React.FC = () => {
  return (
      <Container style={{ paddingTop: '100px' }}>
        <Segment >
          <Grid columns={2} divided style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
              <Grid.Column style={{ backgroundColor: "#1aebb6", width: "150px", textAlign: "center", padding: "50px 30px" }}>
                <Image src={logo} alt="Logo" width={80} />
                <p style={{ fontSize: "20px" }}>
                  CleanMyCar
                </p>
                <p>India's first waterless car cleaning company</p>
              </Grid.Column>

             <Login />
          </Grid>
        </Segment>
      </Container>
  );
};

export default MainContainer;