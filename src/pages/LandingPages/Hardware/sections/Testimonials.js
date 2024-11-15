import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Testimonials() {
  const testimonials = [
    {
      text: "Their hardware solutions improved our efficiency by 40%. Highly recommend!",
      name: "Jane Doe",
      role: "CEO, Innovatech",
    },
    {
      text: "A reliable team with exceptional attention to detail. Outstanding service!",
      name: "John Smith",
      role: "CTO, TechSolutions",
    },
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <MKTypography variant="h4" textAlign="center" mb={4} fontWeight="bold">
          What Our Clients Say
        </MKTypography>
        <Carousel autoPlay={true} indicators={false}>
          {testimonials.map((item, index) => (
            <MKBox key={index} textAlign="center" p={4}>
              <MKTypography variant="body1" italic>
                “{item.text}”
              </MKTypography>
              <MKTypography variant="subtitle1" mt={2} fontWeight="bold">
                {item.name}
              </MKTypography>
              <MKTypography variant="body2" color="text">
                {item.role}
              </MKTypography>
            </MKBox>
          ))}
        </Carousel>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
