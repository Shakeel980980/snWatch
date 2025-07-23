import "./Footer.css";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LocationOn,
  Phone,
  Email,
  Schedule,
} from "@mui/icons-material";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About SNWatch */}
          <Grid>
            <Typography variant="h6" gutterBottom className="footer-heading">
              SNWatch
            </Typography>
            <Typography variant="body2" className="footer-text" mt={2}>
              Premium watches for those who appreciate timeless elegance and
              precision engineering.
            </Typography>
            <Box className="social-icons-container">
              <IconButton aria-label="Facebook" className="social-icon">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" className="social-icon">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" className="social-icon">
                <Instagram />
              </IconButton>
              <IconButton aria-label="YouTube" className="social-icon">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid>
            <Typography variant="h6" gutterBottom className="footer-heading">
              Quick Links
            </Typography>
            <Box className="footer-links-container">
              <Link href="Home.jsx" className="footer-link">
                Home
              </Link>
              <Link href="Shop.jsx" className="footer-link">
                Shop
              </Link>
              <Link href="AboutUs.jsx" className="footer-link">
                About Us
              </Link>
              <Link href="#" className="footer-link">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Customer Service */}
          <Grid>
            <Typography variant="h6" gutterBottom className="footer-heading">
              Customer Service
            </Typography>
            <Box className="footer-links-container">
              <Link href="#" className="footer-link">
                My Account
              </Link>
              <Link href="#" className="footer-link">
                Order Tracking
              </Link>
              <Link href="#" className="footer-link">
                Wishlist
              </Link>
              <Link href="#" className="footer-link">
                Shipping Policy
              </Link>
              <Link href="#" className="footer-link">
                Returns & Exchanges
              </Link>
              <Link href="#" className="footer-link">
                FAQs
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid>
            <Typography variant="h6" gutterBottom className="footer-heading">
              Contact Us
            </Typography>
            <Box className="contact-info-container">
              <Box className="contact-item">
                <LocationOn className="contact-icon" />
                <Typography variant="body2" className="footer-text">
                  123 Watch Street, Time Square, NY 10036
                </Typography>
              </Box>
              <Box className="contact-item">
                <Phone className="contact-icon" />
                <Typography variant="body2" className="footer-text">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box className="contact-item">
                <Email className="contact-icon" />
                <Typography variant="body2" className="footer-text">
                  info@snwatch.com
                </Typography>
              </Box>
              <Box className="contact-item">
                <Schedule className="contact-icon" />
                <Typography variant="body2" className="footer-text">
                  Mon-Fri: 9AM - 6PM
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Newsletter */}
        <Divider className="footer-divider" />
        <Box className="newsletter-container">
          <Box>
            <Typography variant="h6" className="newsletter-title">
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" className="newsletter-subtitle">
              Get updates on new collections and special offers
            </Typography>
          </Box>
          <Box className="newsletter-form">
            <TextField
              placeholder="Your email address"
              variant="outlined"
              size="small"
              className="newsletter-input"
            />
            <Button variant="contained" className="newsletter-button">
              Subscribe
            </Button>
          </Box>
        </Box>

        {/* Copyright */}
        <Divider className="footer-divider" />
        <Box className="copyright-container">
          <Typography variant="body2" className="copyright-text">
            &copy; {new Date().getFullYear()} SNWatch. All Rights Reserved.
          </Typography>
          <Typography variant="body2" className="developer-credit">
            Developed by Shakeel Ahmad
          </Typography>
          <Box className="footer-policy-links">
            <Link href="#" className="policy-link">
              Privacy Policy
            </Link>
            <Link href="#" className="policy-link">
              Terms of Service
            </Link>
            <Link href="#" className="policy-link">
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
