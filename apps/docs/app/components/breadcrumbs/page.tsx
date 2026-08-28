"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Divider, Typography, Stack } from "@mui/material";
import { Breadcrumbs } from "vortex-ui";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

const breadcrumbPropsList = [
  {
    name: "items",
    type: "BreadcrumbItem[]",
    default: "[]",
    description:
      "Array of breadcrumb items with label, optional href, icon, and isNavigable.",
  },
  {
    name: "onCrumbClick",
    type: "(crumb: BreadcrumbItem, index: number) => void",
    default: "undefined",
    description: "Callback fired when a navigable breadcrumb is clicked.",
  },
  {
    name: "separator",
    type: "ReactNode",
    default: "'›'",
    description: "Custom separator node between breadcrumbs.",
  },
  {
    name: "maxItems",
    type: "number",
    default: "undefined",
    description:
      "Maximum number of items to display before collapsing intermediate items.",
  },
  {
    name: "sx",
    type: "SxProps<Theme>",
    default: "undefined",
    description: "Custom styles for the breadcrumbs container.",
  },
];

const mockItems = [
  { label: "Dashboard", href: "/" },
  { label: "Settings", href: "/settings" },
  { label: "Profile", href: "/settings/profile" },
  { label: "Avatar", isNavigable: false },
];

const iconItems = [
  { label: "Home", href: "/", icon: <HomeIcon fontSize="small" /> },
  {
    label: "Settings",
    href: "/settings",
    icon: <SettingsIcon fontSize="small" />,
  },
  {
    label: "Profile",
    isNavigable: false,
    icon: <PersonIcon fontSize="small" />,
  },
];

const iconOnlyItems = [
  { href: "/", icon: <HomeIcon fontSize="small" /> },
  { href: "/settings", icon: <SettingsIcon fontSize="small" /> },
  { isNavigable: false, icon: <PersonIcon fontSize="small" /> },
];

const longItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
  { label: "Account", href: "/settings/account" },
  { label: "Profile", href: "/settings/profile" },
  { label: "Avatar", isNavigable: false },
];

export default function BreadcrumbsDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Breadcrumbs"
        description={
          <>
            A component for indicating the current page`&apos;`s location within
            a navigational hierarchy.
          </>
        }
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Basic Usage
      </Typography>
      <ComponentPreview>
        <Breadcrumbs items={mockItems} />
      </ComponentPreview>
      <ComponentCode
        code={`<Breadcrumbs items={[{ label: "Dashboard", href: "/" }, ...]} />`}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Separators
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        You can customize the separator by providing a <code>separator</code>{" "}
        prop (e.g., <code>/</code> or <code>-</code>).
      </Typography>
      <ComponentPreview>
        <Stack spacing={2}>
          <Breadcrumbs items={mockItems} separator="/" />
          <Breadcrumbs items={mockItems} separator="-" />
        </Stack>
      </ComponentPreview>
      <ComponentCode
        code={`<Breadcrumbs items={items} separator="/" />\n<Breadcrumbs items={items} separator="-" />`}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        With Icons
      </Typography>
      <ComponentPreview>
        <Stack spacing={2}>
          <Breadcrumbs items={iconItems} />
          <Breadcrumbs items={iconOnlyItems} />
        </Stack>
      </ComponentPreview>
      <ComponentCode
        code={`// Text with Icons
<Breadcrumbs items={[
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "Settings", href: "/settings", icon: <SettingsIcon /> },
]} />

// Icons Only
<Breadcrumbs items={[
  { href: "/", icon: <HomeIcon /> },
  { href: "/settings", icon: <SettingsIcon /> },
]} />`}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Collapsed Breadcrumbs
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Use the <code>maxItems</code> prop to automatically collapse
        intermediate breadcrumbs when the total exceeds the limit.
      </Typography>
      <ComponentPreview>
        <Breadcrumbs items={longItems} maxItems={3} />
      </ComponentPreview>
      <ComponentCode code={`<Breadcrumbs items={longItems} maxItems={3} />`} />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Dynamic Next.js Example
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Below is an example of creating a custom dynamic breadcrumb wrapper
        using Next.js router.
      </Typography>
      <ComponentCode
        code={`import React, { useMemo, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PrivilegesContext } from "@/app/PrivilegesProvider";
import { Breadcrumbs } from "vortex-ui";

const CustomBreadcrumbs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { menuItems } = useContext(PrivilegesContext);

  const nonNavigableParents = useMemo(() => {
    if (!menuItems) return [];
    return menuItems
      .filter((item) => item.children && item.children.length > 0)
      .map((item) => item.path?.replace(/\\//g, "").toLowerCase())
      .filter(Boolean);
  }, [menuItems]);

  const breadcrumbs = useMemo(() => {
    const path = pathname?.split("/").filter(Boolean);
    if (!path || path.length === 0) return [{ label: "Dashboard", href: "/" }];

    const crumbs = [{ label: "Dashboard", href: "/" }];

    path.forEach((segment, index) => {
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const href = "/" + path.slice(0, index + 1).join("/");
      const isNonNavigable = nonNavigableParents.includes(
        segment.toLowerCase(),
      );

      crumbs.push({ label, href, isNavigable: !isNonNavigable });
    });

    return crumbs;
  }, [pathname, nonNavigableParents]);

  return (
    <Breadcrumbs 
      items={breadcrumbs} 
      onCrumbClick={(crumb) => {
        if (crumb.href) router.push(crumb.href);
      }}
      separator={
        <img
          src="/images/icons/left_arrow.svg"
          width={6}
          height={6}
          alt="separator"
        />
      }
    />
  );
};

export default CustomBreadcrumbs;`}
      />

      <ComponentProps propsList={breadcrumbPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
