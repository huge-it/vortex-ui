"use client";

import {
  alpha,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

// Standard MUI Icons
import {
  Description as DocumentIcon,
  Folder as FolderIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  componentCategories,
  exampleCategories,
  foundationCategories,
} from "./SidebarCategories";
import { Tooltip } from "vortex-ui";

export interface NavMenuItem {
  id: string;
  title: string;
  href?: string;
  iconComponent?: React.ElementType;
  innerItem?: NavMenuItem[];
}

export interface SidebarProps {
  isMobileSidebarOpen?: boolean;
  onSidebarClose?: () => void;
  drawerWidth?: number;
  menuItems?: NavMenuItem[];
}

const NavInnerListItemStyled = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: 0,
  marginBottom: "4px",
  position: "relative",
  ".MuiButtonBase-root": {
    borderRadius: 8,
    margin: "0 12px 0 40px",
    padding: "6px 8px",
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
    backgroundColor: "transparent",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
    },
    "&.Mui-selected": {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      color: theme.palette.primary.main,
      "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.12) },
    },
  },
}));

const NavListItemStyled = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: 0,
  marginBottom: "4px",
  ".MuiButtonBase-root": {
    margin: "0",
    height: "34px",
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
    backgroundColor: isActive
      ? alpha(theme.palette.primary.main, 0.08)
      : "transparent",
    borderRadius: 1,
    borderLeft: isActive
      ? `4px solid ${theme.palette.primary.main}`
      : "4px solid transparent",
    fontWeight: isActive ? 600 : 500,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
    },
    "&.Mui-selected": {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      color: theme.palette.primary.main,
      "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.12) },
    },
  },
}));

interface NavInnerItemProps {
  item: NavMenuItem;
  pathDirect: string;
  isMobileSidebarOpen: boolean;
}

const NavInnerItem = ({
  item,
  pathDirect,
  isMobileSidebarOpen,
}: NavInnerItemProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const isActive = Boolean(
    item.href &&
    (pathDirect === item.href || pathDirect.startsWith(item.href + "/")),
  );

  const handleOnClick = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const getAbbreviation = (title: string) => {
    if (!title) return "";
    const words = title.trim().split(" ");
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return words
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <List component="div" sx={{ pl: 0 }} disablePadding key={item.id}>
      <NavInnerListItemStyled isActive={isActive}>
        <Tooltip
          title={!isMobileSidebarOpen ? item.title : ""}
          placement="right"
        >
          <ListItemButton
            component={item.href ? Link : "div"}
            href={item.href}
            onClick={() => handleOnClick(item.id)}
            selected={isActive}
            sx={{ borderRadius: 1 }}
          >
            {isMobileSidebarOpen ? (
              <>
                <ListItemText sx={{ m: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      color: isActive ? "primary.main" : "text.primary",
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItemText>
                {item.innerItem && item.innerItem.length > 0 && (
                  <KeyboardArrowDownIcon sx={{ fontSize: 14, ml: 1 }} />
                )}
              </>
            ) : (
              <>
                <ListItemText>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {getAbbreviation(item.title)}
                  </Typography>
                </ListItemText>
                {item.innerItem && item.innerItem.length > 0 && (
                  <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
                )}
              </>
            )}
          </ListItemButton>
        </Tooltip>
      </NavInnerListItemStyled>
    </List>
  );
};

interface NavItemProps {
  item: NavMenuItem;
  pathDirect: string;
  isMobileSidebarOpen: boolean;
}

const NavItem = ({ item, pathDirect, isMobileSidebarOpen }: NavItemProps) => {
  const innerItem = item.innerItem || [];
  const innerPathNames = innerItem.map((inItem) => inItem.href);

  const isDirectlyActive = Boolean(
    item.href &&
    (pathDirect === item.href || pathDirect.startsWith(item.href + "/")),
  );
  const hasActiveInnerItem = innerPathNames.some(
    (innerPath) =>
      innerPath &&
      (pathDirect === innerPath || pathDirect.startsWith(innerPath + "/")),
  );
  const isActive = isDirectlyActive || hasActiveInnerItem;

  const [isOpen, setIsOpen] = useState(hasActiveInnerItem);
  const [prevPath, setPrevPath] = useState(pathDirect);

  if (pathDirect !== prevPath) {
    setPrevPath(pathDirect);
    if (hasActiveInnerItem) {
      setIsOpen(true);
    }
  }

  const IconToRender = item.iconComponent || FolderIcon;

  return (
    <List component="div" disablePadding key={item.id} sx={{ mb: 0.25 }}>
      <NavListItemStyled isActive={isActive}>
        <Tooltip
          title={!isMobileSidebarOpen ? item.title : ""}
          placement="right"
          arrow
        >
          <ListItemButton
            component={item.href ? Link : "div"}
            {...(item.href ? { href: item.href } : {})}
            selected={isActive}
            onClick={() => setIsOpen((prev: boolean) => !prev)}

            sx={{
              borderRadius: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "35px",
                color: isActive ? "primary.main" : "text.secondary",
              }}
            >
              <IconToRender sx={{ fontSize: 22 }} />
            </ListItemIcon>
            <Collapse in={isMobileSidebarOpen} sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "13px",
                      lineHeight: 1.1,
                      color: isActive ? "primary.main" : "text.primary",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {innerItem.length > 0 && (
                    <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                      {isOpen ? (
                        <KeyboardArrowUpIcon sx={{ fontSize: 16, color: isActive ? "primary.main" : "text.secondary" }} />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ fontSize: 16, color: isActive ? "primary.main" : "text.secondary" }} />
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            </Collapse>
          </ListItemButton>
        </Tooltip>
      </NavListItemStyled>
      <Collapse in={isOpen} timeout={300}>
        <Box
          sx={{
            borderRadius: "0 8px 8px 0",
            mx: 0.5,
            mb: 0.25,
            overflow: "hidden",
          }}
        >
          {innerItem.map((innerNavItem) => (
            <NavInnerItem
              key={innerNavItem.id}
              item={innerNavItem}
              pathDirect={pathDirect}
              isMobileSidebarOpen={isMobileSidebarOpen}
            />
          ))}
        </Box>
      </Collapse>
    </List>
  );
};

interface SidebarItemsProps {
  isMobileSidebarOpen: boolean;
  menuItems: NavMenuItem[];
}

const SidebarItems = ({
  isMobileSidebarOpen,
  menuItems,
}: SidebarItemsProps) => {
  const pathname = usePathname() || "";

  return (
    <Box
      sx={{ px: 1, height: "100%", display: "flex", flexDirection: "column" }}
    >
      <List sx={{ pt: 0, flexGrow: 1 }} className="sidebarNav" component="div">
        {menuItems.map((item) => (
          <NavItem
            isMobileSidebarOpen={isMobileSidebarOpen}
            item={item}
            key={item.id}
            pathDirect={pathname}
          />
        ))}
      </List>
    </Box>
  );
};

interface IconOnlySidebarItemsProps {
  menuItems: NavMenuItem[];
}

const IconOnlySidebarItems = ({ menuItems }: IconOnlySidebarItemsProps) => {
  const router = useRouter();
  const pathname = usePathname() || "";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<NavMenuItem | null>(null);

  const handleItemClick = (
    item: NavMenuItem,
    event: React.MouseEvent<HTMLElement>,
  ) => {
    if (item.innerItem && item.innerItem.length > 0) {
      setAnchorEl(event.currentTarget);
      setSelectedItem(item);
    } else if (item.href) {
      router.push(item.href);
    }
  };

  const handleSubItemClick = (subItem: NavMenuItem) => {
    if (subItem.href) {
      router.push(subItem.href);
    }
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const isActive = (itemHref?: string) => {
    if (!itemHref) return false;
    return pathname === itemHref || pathname.startsWith(itemHref + "/");
  };

  const hasActiveSubItem = (item: NavMenuItem) => {
    if (!item.innerItem?.length) return false;
    return item.innerItem.some(
      (subItem) =>
        subItem.href &&
        (pathname === subItem.href || pathname.startsWith(subItem.href + "/")),
    );
  };

  return (
    <Box
      sx={{
        px: 0.5,
        py: 0.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <List
        sx={{ pt: 0, width: "100%", flexGrow: 1 }}
        className="sidebarNav"
        component="div"
      >
        {menuItems.map((item) => {
          const isItemActive = isActive(item.href) || hasActiveSubItem(item);
          const IconToRender = item.iconComponent || FolderIcon;
          return (
            <Box
              key={item.id}
              sx={{
                mb: 0.25,
                px: 1,
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Tooltip
                title={item.title}
                placement="right"
              >
                <IconButton
                  onClick={(e) => handleItemClick(item, e)}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isItemActive
                      ? (theme) => alpha(theme.palette.primary.main, 0.08)
                      : "transparent",
                    // borderLeft: isItemActive
                    //   ? (theme) => `4px solid ${theme.palette.primary.main}`
                    //   : "4px solid transparent",
                    color: isItemActive ? "primary.main" : "text.secondary",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.12),
                      color: "primary.main",
                    },
                  }}
                >
                  <IconToRender sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
          );
        })}
      </List>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
          setSelectedItem(null);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{
          ml: 0.5,
          "& .MuiMenu-paper": {
            minWidth: 180,
            borderRadius: 1.5,
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
            border: "1px solid #e2e8f0",
            py: 0.5,
          },
        }}
      >
        {selectedItem && [
          <Box key="header" sx={{ px: 1.5, py: 0.5, mb: 0.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "0.8125rem",
              }}
            >
              {selectedItem.title}
            </Typography>
          </Box>,
          <Divider key="divider" sx={{ mb: 0.5 }} />,
          ...(selectedItem.innerItem || []).map((subItem) => {
            const SubItemIcon = subItem.iconComponent || FolderIcon;
            return (
              <MenuItem
                key={subItem.id}
                onClick={() => handleSubItemClick(subItem)}
                sx={{
                  mx: 0.5,
                  borderRadius: 1,
                  py: 0.5,
                  px: 1.5,
                  minHeight: 32,
                  backgroundColor:
                    pathname === subItem.href ||
                    pathname.startsWith(subItem.href + "/")
                      ? (theme) => alpha(theme.palette.primary.main, 0.08)
                      : "transparent",
                  color:
                    pathname === subItem.href ||
                    pathname.startsWith(subItem.href + "/")
                      ? "primary.main"
                      : "text.primary",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.12),
                    color: "primary.main",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <SubItemIcon sx={{ fontSize: 16, color: "inherit" }} />
                </ListItemIcon>
                <ListItemText
                  primary={subItem.title}
                  primaryTypographyProps={{
                    fontSize: "0.8125rem",
                    fontWeight: pathname === subItem.href ? 600 : 400,
                  }}
                />
              </MenuItem>
            );
          }),
        ]}
      </Menu>
    </Box>
  );
};

export function Sidebar({
  isMobileSidebarOpen = true,
  onSidebarClose,
  drawerWidth = 260,
}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const sidebarWidth = drawerWidth;
  const pathname = usePathname() || "";

  const rawCategories = pathname?.startsWith("/examples")
    ? exampleCategories
    : pathname?.startsWith("/foundations")
      ? foundationCategories
      : componentCategories;

  const menuItems: NavMenuItem[] = [
    {
      id: "home",
      title: "Dashboard",
      href: "/",
      innerItem: [],
      iconComponent: HomeIcon,
    },
    ...rawCategories.map((cat, i) => ({
      id: `cat-${i}`,
      title: cat.title,
      iconComponent: cat.icon || FolderIcon,
      innerItem: cat.items.map((item, j) => ({
        id: `item-${i}-${j}`,
        title: item.name,
        href: item.href,
        iconComponent: DocumentIcon,
      })),
    })),
  ];

  const sidebarContent = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "100%",
          overflow: "auto",
          py: 2,
          "::-webkit-scrollbar": { width: "6px" },
          "::-webkit-scrollbar-track": { background: "transparent" },
          "::-webkit-scrollbar-thumb": {
            background: (theme) => theme.palette.divider,
            borderRadius: "3px",
            "&:hover": { background: (theme) => theme.palette.action.disabled },
          },
        }}
      >
        {sidebarWidth > 100 ? (
          <SidebarItems isMobileSidebarOpen={true} menuItems={menuItems} />
        ) : (
          <IconOnlySidebarItems menuItems={menuItems} />
        )}
      </Box>
    </Box>
  );

  // Mobile temporary drawer
  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={isMobileSidebarOpen}
        onClose={onSidebarClose}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: "background.paper",
            boxSizing: "border-box",
            border: "none",
            boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  // Desktop sticky behavior inside flex
  return (
    <Box
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        zIndex: 1200,
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "sticky",
        top: 64, // below header
        height: "calc(100vh - 64px)",
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      {sidebarContent}
    </Box>
  );
}
