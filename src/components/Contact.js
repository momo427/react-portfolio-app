import React from "react";
import { Container} from "react-bootstrap";
import Redirect from '@material-ui/core/Link';
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div>
        <h2 className='getintouch'>Get in Touch</h2>
      <Container className="callme">
        <ul className='cons'>
        <Redirect href="tel:2405164953">
          <PhoneIcon sx={{ fontSize: 90 }} />
          </Redirect>
        </ul>
        
        <ul className='cons'>
        <a href="mailto:tydevspot@gmail.com">
          <EmailIcon  sx={{ fontSize: 90 }}  />
          </a>
        </ul>

        <ul className='cons'>
            <Redirect href="https://www.linkedin.com/in/tyra-ferguson-0b1929114">
          <LinkedInIcon sx={{ fontSize: 90 }}   />
          </Redirect>
        </ul>

        <ul className='cons'>
        <Redirect href="https://github.com/momo427">
          <GitHubIcon sx={{ fontSize: 90 }}  />
          </Redirect>
        </ul>

        <ul className='cons'>
            <Redirect href="https://twitter.com/intent/tweet?text=@mo_winkle">
          <TwitterIcon sx={{ fontSize: 90 }}  />
          </Redirect>
        </ul>
      </Container>
    </div>
  );
}
export default Contact;
