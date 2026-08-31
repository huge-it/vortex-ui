"use client";

import React, { useState } from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { DataTable, Button, TextField, Select } from "vortex-ui";
import Link from "next/link";
import { Add } from "@mui/icons-material";

const projectData = [
  {
    id: "PRJ-8392",
    name: "E-Commerce Platform",
    type: "Web Application",
    status: "In Progress",
    date: "Oct 1, 2026",
  },
  {
    id: "PRJ-8393",
    name: "Mobile App V2",
    type: "Mobile App",
    status: "Planning",
    date: "Nov 15, 2026",
  },
  {
    id: "PRJ-8394",
    name: "Legacy Migration",
    type: "Desktop Software",
    status: "Completed",
    date: "Jul 20, 2026",
  },
  {
    id: "PRJ-8395",
    name: "Marketing Site",
    type: "Web Application",
    status: "In Progress",
    date: "Oct 10, 2026",
  },
];

type Project = (typeof projectData)[0];

export default function ProjectListExample() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData = projectData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      item.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const columns = [
    {
      key: "id",
      header: "Project ID",
      render: (row: Project) => (
        <Typography variant="body2" fontWeight={600} color="text.secondary">
          {row.id}
        </Typography>
      ),
    },
    {
      key: "name",
      header: "Project Name",
      render: (row: Project) => (
        <Typography
          component={Link}
          href="/examples/project/view"
          variant="body2"
          fontWeight={500}
          color="primary.main"
          sx={{
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {row.name}
        </Typography>
      ),
    },
    { key: "type", header: "Type" },
    { key: "date", header: "Start Date" },
    {
      key: "status",
      header: "Status",
      render: (row: Project) => {
        let color: "default" | "primary" | "success" | "warning" = "default";
        if (row.status === "In Progress") color = "primary";
        if (row.status === "Completed") color = "success";
        if (row.status === "Planning") color = "warning";

        return <Chip label={row.status} size="small" color={color} />;
      },
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
            Projects
          </Typography>
          <Typography color="text.secondary">
            Manage and view all your active and past projects.
          </Typography>
        </Box>
        <Button
          component={Link}
          href="/examples/project/create"
          variant="filled"
        >
          <Add sx={{ mr: 1, fontSize: 20 }} />
          New Project
        </Button>
      </Box>

      <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
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
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              fullWidth
            />
          </Box>
          <Box sx={{ width: 200 }}>
            <Select
              variant="icon"
              label="Status"
              value={statusFilter}
              onChange={(val) => setStatusFilter(val as string)}
              options={[
                { value: "all", label: "All Statuses" },
                { value: "in progress", label: "In Progress" },
                { value: "planning", label: "Planning" },
                { value: "completed", label: "Completed" },
              ]}
              fullWidth
            />
          </Box>
        </Box>
        <DataTable
          columns={columns}
          data={filteredData}
          emptyMessage="No projects found."
        />
      </Paper>
    </Box>
  );
}
