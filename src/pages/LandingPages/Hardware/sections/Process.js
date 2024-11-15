import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

function Process() {
  const steps = [
    { title: "Concept", description: "Collaborate to define goals and specifications." },
    { title: "Design", description: "Develop a tailored blueprint for your needs." },
    { title: "Prototyping", description: "Build and test a working prototype." },
    { title: "Deployment", description: "Deliver and provide ongoing support." },
  ];

  return (
    <MKBox component="section" py={6} bgcolor="grey.200">
      <Container>
        <MKTypography variant="h4" textAlign="center" mb={4} fontWeight="bold">
          How We Work
        </MKTypography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MKBox
                p={4}
                textAlign="center"
                borderRadius="lg"
                sx={{
                  bgcolor: "white",
                  boxShadow: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <MKTypography variant="h5" fontWeight="bold" color="info" mb={2}>
                  {step.title}
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  {step.description}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Process;
