"use client";

import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import {
  Button,
  DataTable,
  Select,
  TextField,
  Avatar,
  Sheet,
  Link as VortexLink,
} from "vortex-ui";

const usersData = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Software Engineer",
    dept: "Engineering",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "Product Designer",
    dept: "Design",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@example.com",
    role: "Product Manager",
    dept: "Product",
    avatar: "/static/images/avatar/3.jpg",
  },
  {
    id: 4,
    name: "Sarah Davis",
    email: "sarah.d@example.com",
    role: "HR Specialist",
    dept: "Human Resources",
    avatar: "/static/images/avatar/4.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.k@example.com",
    role: "Frontend Dev",
    dept: "Engineering",
    avatar: "/static/images/avatar/5.jpg",
  },
];

export default function ProfileListExample() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");

  const filteredData = usersData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase());
    const matchesDept =
      deptFilter === "all" ||
      item.dept.toLowerCase() === deptFilter.toLowerCase();
    return matchesSearch && matchesDept;
  });

  const columns = [
    {
      key: "name",
      header: "User",
      render: (row: (typeof usersData)[0]) => (
        <Box display="flex" alignItems="center" gap={1.5}>
          <Avatar src={row.avatar} sx={{ width: 32, height: 32 }}>
            {row.name.charAt(0)}
          </Avatar>
          <Box>
            <VortexLink
              href="/examples/user-profile/view"
              variant="primary"
              size="md"
              sx={{ fontWeight: 600 }}
            >
              {row.name}
            </VortexLink>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              {row.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    { key: "role", header: "Role" },
    { key: "dept", header: "Department" },
    {
      key: "actions",
      header: "",
      align: "right" as const,
      render: () => (
        <Button variant="text" size="sm">
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 1000, margin: "0 auto", py: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        mb={4}
      >
        <Box>
          <Typography variant="h4" color="text.primary" fontWeight={700} mb={1}>
            Team Members
          </Typography>
          <Typography color="text.secondary">
            Manage your team directory, roles, and profiles.
          </Typography>
        </Box>
        <Button
          component={NextLink}
          href="/examples/user-profile/create"
          variant="filled"
          icon={<Add />}
        >
          Add Member
        </Button>
      </Box>

      <Sheet variant="sm" sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
            display: "flex",
            gap: 2,
            bgcolor: "background.default",
          }}
        >
          <Box sx={{ width: 300 }}>
            <TextField
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              fullWidth
            />
          </Box>
          <Box sx={{ width: 200 }}>
            <Select
              variant="icon"
              options={[
                { value: "all", label: "All Departments" },
                { value: "engineering", label: "Engineering" },
                { value: "design", label: "Design" },
                { value: "product", label: "Product" },
                { value: "human resources", label: "Human Resources" },
              ]}
              value={deptFilter}
              onChange={(val) => setDeptFilter(val as string)}
              size="small"
            />
          </Box>
        </Box>
        <DataTable
          columns={columns}
          data={filteredData}
          emptyMessage="No users found."
        />
      </Sheet>
    </Box>
  );
}
