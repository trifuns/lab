// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Custom Sections for the Hardware Page
import Features from "pages/LandingPages/Hardware/sections/Features";
import Process from "pages/LandingPages/Hardware/sections/Process";
import Testimonials from "pages/LandingPages/Hardware/sections/Testimonials";
import TestingValidation from "pages/LandingPages/Hardware/sections/TestingValidation";
import Industrialization from "pages/LandingPages/Hardware/sections/Industrialization";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/page-hardware.jpg"; // Replace with a high-quality image

function HardwarePage() {
  return (
    <>
      {/* Navbar */}
      <DefaultNavbar routes={routes} transparent light />

      {/* Hero Section */}
      <MKBox
        minHeight="90vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.7),
              rgba(gradients.dark.state, 0.7)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                fontWeight: "bold",
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
              })}
            >
              Advanced Hardware Engineering
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.85}
              mt={2}
              mb={4}
              sx={{ fontSize: "1.2rem" }}
            >
              Unlock the power of cutting-edge hardware solutions to drive performance, efficiency,
              and scalability.
            </MKTypography>
            <MKButton
              component={MuiLink}
              href={"/pages/landing-pages/contact-us"}
              size="large"
              variant="gradient"
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              Contact Us
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      {/* Main Content Card */}
      <Card
        sx={{
          p: 4,
          mx: { xs: 2, lg: 4 },
          mt: -10,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Features />
        <Process />
        <TestingValidation />
        <Industrialization />
        <Testimonials />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default HardwarePage;
