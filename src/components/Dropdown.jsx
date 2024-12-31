import React, { useState } from "react";
import { Menu, MenuItem, Button, Box, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Dropdown({ items, children, color, bgcolor, bdcolor, sx }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isActiveDropdown = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "inline-block", position: "relative" }}>
            <Button
                onClick={handleClick}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "160px",
                    padding: "10px 20px",
                    textTransform: "none",
                    borderRadius: "8px",
                    backgroundColor: `${bgcolor}`,
                    color: `${color}`,
                    border: `2px solid ${bdcolor}`,
                    boxShadow: `3px 3px 0px ${bdcolor}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translate(3px, 3px)",
                        boxShadow: "none",
                    },
                    ...sx,
                }}
                endIcon={
                    <KeyboardArrowDownIcon
                        sx={{
                            transition: "transform 0.3s ease",
                            transform: isActiveDropdown
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                        }}
                    />
                }
            >
                {children}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={isActiveDropdown}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "dropdown-button",
                    sx: "padding: 0",
                }}
                sx={{
                    mt: 1,
                    "& .MuiMenu-paper": {
                        borderRadius: "8px",
                        border: `2px solid ${bdcolor}`,
                        boxShadow: `3px 3px 0px ${bdcolor}`,
                        minWidth: "160px",
                        minHeight: "0",
                        padding: 0,
                    },
                }}
            >
                {items.map((item, index) => (
                    <Box key={index}>
                        <MenuItem
                            key={index}
                            component="a"
                            href={item.link}
                            sx={{
                                textDecoration: "none",
                                color: `${color}`,
                                backgroundColor: `${bgcolor}`,
                                '&:hover':{
                                    backgroundColor: `${color}`,
                                    color: `${bgcolor}`,
                                },
                            }}
                            onClick={handleClose}
                        >
                            {item.name}
                        </MenuItem>
                        {index < items.length - 1 && (
                            <Divider
                                style={{ margin: "0" }}
                                sx={{ backgroundColor: bdcolor }}
                            />
                        )}
                    </Box>
                ))}
            </Menu>
        </Box>
    );
}
