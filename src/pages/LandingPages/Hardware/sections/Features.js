import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import HardwareIcon from "@mui/icons-material/Hardware";
import SpeedIcon from "@mui/icons-material/Speed";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";

function Features() {
  const features = [
    {
      icon: <HardwareIcon fontSize="large" color="info" />,
      title: "Cutting-Edge Technology",
      description: "Leverage the latest advancements in hardware for unmatched performance.",
    },
    {
      icon: <SpeedIcon fontSize="large" color="success" />,
      title: "High Performance",
      description: "Optimized designs to handle high workloads efficiently.",
    },
    {
      icon: <BatterySaverIcon fontSize="large" color="warning" />,
      title: "Energy Efficiency",
      description: "Minimize power consumption while maximizing output.",
    },
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <MKTypography variant="h4" textAlign="center" mb={4} fontWeight="bold">
          Key Features
        </MKTypography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MKBox
                p={3}
                textAlign="center"
                borderRadius="lg"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {feature.icon}
                <MKTypography variant="h5" mt={2} fontWeight="bold">
                  {feature.title}
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={1}>
                  {feature.description}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Features;
