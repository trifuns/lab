import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChartLine,
  faShieldAlt,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";

function TestingValidation() {
  const validationSteps = [
    {
      title: "Comprehensive Testing",
      description:
        "Rigorous functional and stress testing ensures the product meets the required specifications.",
      icon: faCheckCircle,
    },
    {
      title: "Performance Benchmarking",
      description: "Evaluate the system's performance under various real-world scenarios.",
      icon: faChartLine,
    },
    {
      title: "Compliance Checks",
      description: "Ensure all hardware meets industry standards and regulatory requirements.",
      icon: faShieldAlt,
    },
    {
      title: "Feedback Iteration",
      description: "Incorporate client feedback and refine designs for optimal usability.",
      icon: faRedoAlt,
    },
  ];

  return (
    <MKBox component="section" py={6} bgcolor="grey.50">
      <Container>
        <MKTypography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
          Testing and Validation
        </MKTypography>
        <Grid container spacing={4}>
          {validationSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MKBox
                p={3}
                textAlign="center"
                borderRadius="lg"
                sx={{
                  backgroundColor: "white",
                  boxShadow: 3,
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
              >
                <MKBox
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "info.main",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "2rem",
                  }}
                >
                  <FontAwesomeIcon icon={step.icon} />
                </MKBox>
                <MKTypography variant="h5" fontWeight="bold" color="info" mb={2}>
                  {step.title}
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={1}>
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

export default TestingValidation;
