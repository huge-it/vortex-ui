"use client";

import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import {
  Button,
  DateRangePicker,
  DragDropUpload,
  FileItem,
  Select,
  TextField,
  ToggleSwitch,
  Grid,
  Textarea,
} from "vortex-ui";

export default function CreateProjectExample() {
  const [projectType, setProjectType] = useState("web");
  const [isPublic, setIsPublic] = useState(false);
  const [rangeVal, setRangeVal] = useState({ startDate: "", endDate: "" });
  const [attachments, setAttachments] = useState<FileItem[]>([]);

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", py: 4 }}>
      <Typography variant="h4" color="text.primary" fontWeight={700} mb={1}>
        Create Project
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Fill in the details below to create a new project.
      </Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Grid container spacing={3}>
          <Grid size={6}>
            <TextField
              label="Project Name"
              placeholder="e.g., E-Commerce Platform"
              required
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <Select
              variant="icon"
              label="Contact Method"
              value={projectType}
              onChange={(val) => setProjectType(val as string)}
              options={[
                { value: "web", label: "Web Application" },
                { value: "mobile", label: "Mobile App" },
                { value: "desktop", label: "Desktop Software" },
              ]}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <Textarea
              label="Description"
              placeholder="Brief description of the project"
              minRows={2}
              fullWidth
            />
          </Grid>
        </Grid>

        <Divider />

        <Typography variant="h6" fontWeight={600}>
          Timeline & Settings
        </Typography>

        <Grid container spacing={3}>
          <Grid size={6}>
            <DateRangePicker
              label="Project Timeline"
              startDate={rangeVal.startDate}
              endDate={rangeVal.endDate}
              onChange={setRangeVal}
            />
          </Grid>
          <Grid size={6} display="flex" alignItems="center">
            <ToggleSwitch
              label="Public Project (visible to everyone)"
              checked={isPublic}
              onChange={setIsPublic}
            />
          </Grid>
        </Grid>

        <Divider />

        <Typography variant="h6" fontWeight={600}>
          Resources
        </Typography>

        <Box sx={{ gridColumn: "span 2" }}>
          <DragDropUpload
            label="Project Documentation"
            value={attachments}
            onChange={setAttachments}
            multiple
            maxFiles={5}
            helperText="Upload any relevant files (specs, assets, etc.)"
          />
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
          <Button variant="outlined" severity="info">
            Cancel
          </Button>
          <Button variant="filled" severity="primary">
            Create Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
