import Container from "@mui/material/Container";
//import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";

function Industrialization() {
  const industrializationSteps = [
    {
      title: "Mass Production",
      description:
        "Transition prototypes to scalable production-ready systems for mass manufacturing.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Supply Chain Integration",
      description:
        "Coordinate with suppliers to ensure smooth procurement of components and materials.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Quality Assurance",
      description:
        "Implement QA processes to maintain consistency and reliability during production.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Delivery Optimization",
      description:
        "Ensure efficient logistics for timely delivery of finished products to end-users.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <MKBox component="section" py={6} bgcolor="grey.100">
      <Container>
        <MKTypography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          Industrialization
        </MKTypography>
        <Carousel indicators={false} navButtonsAlwaysVisible autoPlay={true} animation="slide">
          {industrializationSteps.map((step, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: 4,
                borderRadius: "lg",
                overflow: "hidden",
              }}
            >
              <MKBox
                component="img"
                src={step.image}
                alt={step.title}
                sx={{ width: "50%", height: "100%", objectFit: "cover" }}
              />
              <MKBox p={3}>
                <MKTypography variant="h5" fontWeight="bold" color="primary" mb={1}>
                  {step.title}
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={1}>
                  {step.description}
                </MKTypography>
              </MKBox>
            </Card>
          ))}
        </Carousel>
      </Container>
    </MKBox>
  );
}

export default Industrialization;
