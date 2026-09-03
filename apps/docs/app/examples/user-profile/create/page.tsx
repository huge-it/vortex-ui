"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Divider } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  TextField,
  Select,
  Grid,
  NumberField,
  CheckboxGroup,
  Button,
  IconButton,
  FileItem,
  Avatar,
  Sheet,
} from "vortex-ui";

export default function CreateProfileExample() {
  const [role, setRole] = useState("developer");
  const [experience, setExperience] = useState<number>(0);
  const [skills, setSkills] = useState<string[]>([]);
  const [avatarFiles, setAvatarFiles] = useState<FileItem[]>([]);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      setAvatarFiles([
        {
          file_name: file.name,
          file_type: file.type,
          file_data: null,
          preview_url: url,
          size: file.size,
          src: url,
        },
      ]);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", py: 4 }}>
      <Typography color="text.primary" variant="h4" fontWeight={700} mb={1}>
        Create User Profile
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Enter the details for the new team member.
      </Typography>

      <Sheet variant="sm" sx={{ p: 4, borderRadius: 2 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1.5}
          mb={4}
        >
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar
              type="image"
              src={avatarUrl}
              sx={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                bgcolor: "primary.main",
                fontSize: "2.5rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: (theme) =>
                  `0 0 0 4px ${theme.palette.background.paper}, 0 4px 14px rgba(0,0,0,0.1)`,
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              {avatarUrl ? "" : "U"}
            </Avatar>

            <IconButton
              aria-label="Upload profile picture"
              onClick={() => fileInputRef.current?.click()}
              icon={<PhotoCamera sx={{ fontSize: 18 }} />}
              sx={{
                position: "absolute",
                bottom: 2,
                right: 2,
                bgcolor: "primary.main",
                color: "#ffffff",
                width: 36,
                height: 36,
                border: "2.5px solid",
                borderColor: "background.paper",
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            />

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </Box>

          {avatarUrl ? (
            <Button
              variant="text"
              severity="error"
              size="sm"
              onClick={() => {
                setAvatarUrl("");
                setAvatarFiles([]);
              }}
            >
              Remove Photo
            </Button>
          ) : (
            <Typography variant="caption" color="text.secondary">
              Click avatar or camera icon to upload photo
            </Typography>
          )}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Full Name"
                placeholder="John Doe"
                required
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Email Address"
                placeholder="john.doe@example.com"
                required
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Select
                variant="icon"
                label="Role"
                fullWidth
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
            <Grid size={{ xs: 12, sm: 6 }}>
              <NumberField
                label="Years of Experience"
                value={experience}
                onChange={(e) =>
                  setExperience(e.target.value as unknown as number)
                }
                min={0}
                max={50}
              />
            </Grid>
          </Grid>

          <Box>
            <Typography
              variant="subtitle2"
              color="text.primary"
              fontWeight={600}
              mb={1}
            >
              Core Skills
            </Typography>
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
              orientation="horizontal"
            />
          </Box>

          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button variant="outlined" severity="info">
              Cancel
            </Button>
            <Button variant="filled" severity="primary">
              Save Profile
            </Button>
          </Box>
        </Box>
      </Sheet>
    </Box>
  );
}
