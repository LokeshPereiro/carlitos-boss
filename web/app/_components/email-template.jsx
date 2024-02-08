import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ body }) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://yt3.googleusercontent.com/K4ZufSCvqT-Mx7ylpkoroVUR47Ka7CotpcQcRa2VqX5X5gLB1I7I33lfREK8SBfAZIzBV77sim4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          width="240"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {body.fullName},</Text>
        <Text style={paragraph}>
          Thank you purchasing on CarlitosBoss. Click on Below download button
          to download the all your fav rackets
        </Text>

        <Text style={paragraph}>
          Best,
          <br />
          The CarlitosBoss team
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
