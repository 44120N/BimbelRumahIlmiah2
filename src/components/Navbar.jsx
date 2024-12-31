import React, { useState } from "react";
import Button from "./Button";
import {
    AppBar,
    Toolbar,
    Typography,
    Button as MuiButton,
    Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
import { Link, Outlet } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        {
            label: "Home",
            onClick: () => console.log("Home clicked"),
            href: "./",
        },
        {
            label: "Blog",
            onClick: () => console.log("Blog clicked"),
            href: "./blog",
        },
        {
            label: "Mathematics",
            onClick: () => console.log("Math clicked"),
            href: "./math",
        },
        {
            label: "Informatics",
            onClick: () => console.log("Inf clicked"),
            href: "./inf",
        },
        {
            label: "Login",
            onClick: () => console.log("Login clicked"),
            href: "./login",
        },
    ];

    const forumDropdown = [
        {
            name: "Mathematics",
            link: "./math",
        },
        {
            name: "Informatics",
            link: "./inf",
        },
    ];

    return (
        <>
            <Drawer
                list={menuItems}
                title="Menu"
                active={mobileOpen}
                setActive={setMobileOpen}
                bgcolor={"primary.main"}
                color={"#fff"}
                bdcolor={"#000"}
            />
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "primary.main",
                    boxShadow: "none",
                    borderBottom: "solid 3px",
                    borderColor: "black_blue.main",
                    color: "#fff",
                }}
            >
                <Toolbar>
                    <Button
                        color={"#fff"}
                        bgcolor={"primary.main"}
                        bdcolor={"#000"}
                        onClick={() => setMobileOpen(true)}
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            padding: "1%",
                        }}
                    >
                        <MenuIcon />
                    </Button>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        <img src="./putih.svg" style={{maxHeight: '5vh'}} alt="Rumah Ilmiah" />
                    </Typography>

                    <Stack
                        sx={{ display: { xs: "none", sm: "flex" } }}
                        direction={"row"}
                        gap={2}
                    >
                        <MuiButton
                            color="inherit"
                            component={Link}
                            to="./"
                            sx={{ textTransform: "capitalize" }}
                        >
                            Home
                        </MuiButton>
                        <MuiButton
                            color="inherit"
                            component={Link}
                            sx={{ textTransform: "capitalize" }}
                            to="./blog"
                        >
                            Blog
                        </MuiButton>
                        <Dropdown
                            bgcolor={"primary.main"}
                            color={"#fff"}
                            bdcolor={"secondary.main"}
                            items={forumDropdown}
                            sx={{
                                boxShadow: "none",
                                "&:hover": {},
                                transition: "none",
                                minWidth: 0,
                            }}
                        >
                            Study
                        </Dropdown>
                        <MuiButton
                            color="inherit"
                            component={Link}
                            sx={{ textTransform: "capitalize" }}
                            to="./login"
                        >
                            Login
                        </MuiButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
};

export default Navbar;
