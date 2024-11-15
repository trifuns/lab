// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Pages
import Home from "layouts/pages/presentation";
import Hardware from "layouts/pages/landing-pages/hardware";
import Software from "layouts/pages/landing-pages/software";
import ArtificialIntelligence from "layouts/pages/landing-pages/artificial-intelligence";
import TurnkeySolutions from "layouts/pages/landing-pages/turnkey-solutions";
import SmartCity from "layouts/pages/landing-pages/smart-city";
import SmartMarina from "layouts/pages/landing-pages/smart-marina";
import AboutUs from "layouts/pages/landing-pages/about-us";
import Career from "layouts/pages/landing-pages/career";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "SAVIC R&D",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://trifuns.github.io/lab/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://trifuns.github.io/lab/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://trifuns.github.io/lab/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://trifuns.github.io/lab/",
    },
  ],
  menus: [
    {
      name: "Services",
      items: [
        {
          name: "Hardware",
          route: "/pages/landing-pages/hardware",
          component: <Hardware />,
        },
        {
          name: "Software",
          route: "/pages/landing-pages/software",
          component: <Software />,
        },
        {
          name: "Artificial Intelligence",
          route: "/pages/landing-pages/artificial-intelligence",
          component: <ArtificialIntelligence />,
        },
        {
          name: "Turnkey Solutions",
          route: "/pages/landing-pages/turnkey-solutions",
          component: <TurnkeySolutions />,
        },
      ],
    },
    {
      name: "Expertise",
      items: [
        {
          name: "Smart City",
          route: "/pages/landing-pages/smart-city",
          component: <SmartCity />,
        },
        {
          name: "Smart Marina",
          route: "/pages/landing-pages/smart-marina",
          component: <SmartMarina />,
        },
      ],
    },
    {
      name: "company",
      items: [
        {
          name: "Contact Us",
          route: "/pages/landing-pages/contact-us",
          component: <ContactUs />,
        },
        {
          name: "Team",
          route: "/pages/landing-pages/about-us",
          component: <AboutUs />,
        },
        {
          name: "Career",
          route: "/pages/landing-pages/career",
          component: <Career />,
        },
        {
          name: "News",
          route: "/pages/landing-pages/author",
          component: <Author />,
        },
      ],
    },
    {
      name: "Legal",
      items: [
        {
          name: "Terms & conditions",
          route: "layouts/pages/presentation",
          component: <Home />,
        },
        {
          name: "Privacy policy",
          route: "layouts/pages/presentation",
          component: <Home />,
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      &copy; {date} SAVIC R&D | All rights reserved.
    </MKTypography>
  ),
};
