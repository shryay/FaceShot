import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Box className="pt-24 px-4 sm:px-6 lg:px-8">
        <Box className="max-w-3xl mx-auto text-center space-y-6">
          <Typography variant="h2" className="text-gray-900 font-bold">
            Face Attendance System Admin Panel
          </Typography>
          <Typography variant="h5" className="text-gray-600">
            Manage your organization's attendance records with our secure and
            efficient facial recognition system
          </Typography>
          <Box className="flex justify-center gap-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/signup"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="/signin"
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
