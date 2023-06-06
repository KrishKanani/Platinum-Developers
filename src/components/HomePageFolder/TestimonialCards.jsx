import React from "react";
import { Box, Typography } from "@mui/material";
const TestimonialCards = ({ review }) => {
  return (
    <Box margin="20px">
      <Box
        sx={{
          // height: { xs: "400px", md: "300px" },
          width: { xs: "300px", md: "500px" },
          backgroundColor: "#f8f0fc",
          border: "1px solid #000",
          borderRadius: "10px",
          padding: "20px",
          paddingTop: "80px",
        }}
      >
        <Typography
          variant="subtitle"
          // sx={{ fontSize: "20px", fontFamily: "Poppins", marginTop: "40px" }}
        >
          {review.review}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            fontFamily: "Poppins",
            marginTop: "40px",
          }}
        >
          {review.name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            fontFamily: "Poppins",
            marginTop: "10px",
          }}
        >
          {review.propertyName}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCards;
