import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CameraAlt as CameraIcon, Home as HomeIcon } from "@mui/icons-material";
import { Button, Breadcrumbs, Typography } from "@mui/material";

const Navbar = () => {
  const accessToken = localStorage.getItem("access_token");
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CameraIcon className="text-indigo-600" />
              <Typography variant="h6" className="font-bold text-indigo-600">
                FaceShot
              </Typography>
            </div>
            <Breadcrumbs aria-label="breadcrumb" className="text-gray-600">
              <Link to="/" className="flex items-center gap-1">
                <HomeIcon fontSize="small" />
                <Typography variant="body2">Home</Typography>
              </Link>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                  <Typography key={name} variant="body2" color="text.primary">
                    {name}
                  </Typography>
                ) : (
                  <Link key={name} to={routeTo} className="hover:underline">
                    <Typography variant="body2">{name}</Typography>
                  </Link>
                );
              })}
            </Breadcrumbs>
          </div>
          <div className="flex space-x-4">
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            {accessToken ? (
              <Button onClick={handleSignOut} color="error">
                Sign Out
              </Button>
            ) : (
              <>
                <Button component={Link} to="/signin" color="inherit">
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
