"use client";

import React, { useState } from "react";
import { Box, Typography, Divider, Grid, Paper, Avatar } from "@mui/material";
import { 
  TextField, 
  Select, 
  NumberField,
  CheckboxGroup,
  UploadButton,
  Button,
  FileItem
} from "vortex-ui";

export default function CreateProfileExample() {
  const [role, setRole] = useState("developer");
  const [experience, setExperience] = useState<number>(0);
  const [skills, setSkills] = useState<string[]>([]);
  const [avatarFiles, setAvatarFiles] = useState<FileItem[]>([]);

  const avatarUrl = avatarFiles.length > 0 && avatarFiles[0].preview_url ? avatarFiles[0].preview_url : "";

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", py: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={1}>Create User Profile</Typography>
      <Typography color="text.secondary" mb={4}>
        Enter the details for the new team member.
      </Typography>

      <Paper variant="outlined" sx={{ p: 4, borderRadius: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={4}>
          <Avatar 
            src={avatarUrl} 
            sx={{ width: 96, height: 96, bgcolor: "primary.main", fontSize: "2rem" }}
          >
            {avatarUrl ? "" : "U"}
          </Avatar>
          <UploadButton
            label="Upload Avatar"
            value={avatarFiles}
            onChange={setAvatarFiles}
            multiple={false}
            fileTypes="image"
            maxSizeMB={5}
          />
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                placeholder="John Doe"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                placeholder="john.doe@example.com"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Select
                label="Role"
                options={[
                  { value: "developer", label: "Software Engineer" },
                  { value: "designer", label: "Product Designer" },
                  { value: "manager", label: "Product Manager" },
                  { value: "hr", label: "Human Resources" },
                ]}
                value={role}
                onChange={(val) => setRole(val as string)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NumberField
                label="Years of Experience"
                value={experience}
                onChange={(val) => setExperience(val || 0)}
                min={0}
                max={50}
              />
            </Grid>
          </Grid>

          <Box>
            <Typography variant="subtitle2" fontWeight={600} mb={1}>Core Skills</Typography>
            <CheckboxGroup
              options={[
                { value: "react", label: "React / Next.js" },
                { value: "node", label: "Node.js" },
                { value: "python", label: "Python" },
                { value: "design", label: "UI/UX Design" },
                { value: "agile", label: "Agile Management" },
              ]}
              value={skills}
              onChange={setSkills}
              layout="horizontal"
            />
          </Box>

          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button variant="outlined" color="secondary">Cancel</Button>
            <Button variant="contained" color="primary">Save Profile</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
