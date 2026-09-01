"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Divider, Typography, Stack } from "@mui/material";
import { Avatar } from "vortex-ui";

const avatarPropsList = [
  {
    name: "type",
    type: "'letter' | 'image'",
    default: "'letter'",
    description: "The type of avatar to display.",
  },
  {
    name: "variant",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "The size variant of the avatar.",
  },
  {
    name: "editable",
    type: "boolean",
    default: "false",
    description:
      "If true, shows an edit overlay on hover and allows changing the content.",
  },
  {
    name: "name",
    type: "string",
    default: "undefined",
    description: "The name to use for letter mode. Takes the first character.",
  },
  {
    name: "onLetterChange",
    type: "(name: string) => void",
    default: "undefined",
    description: "Callback when the name is updated in editable letter mode.",
  },
  {
    name: "src",
    type: "string",
    default: "undefined",
    description: "The image source URL for image mode.",
  },
  {
    name: "alt",
    type: "string",
    default: "''",
    description: "Alt text for the image.",
  },
  {
    name: "onImageChange",
    type: "(file: File, url: string) => void",
    default: "undefined",
    description:
      "Callback when a new image is selected in editable image mode.",
  },
  {
    name: "bgcolor",
    type: "string",
    default: "'#E5E7F0'",
    description: "Background color for letter mode and image fallback.",
  },
  {
    name: "color",
    type: "string",
    default: "'#808697'",
    description: "Text/Icon color for letter mode and image fallback.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "undefined",
    description: "Custom children to render inside the avatar (e.g. for initials).",
  },
];

export default function AvatarDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Avatar"
        description={
          <>
            A component for displaying user profile images or initials, with
            built-in edit capabilities.
          </>
        }
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Basic Usage (Letter Mode)
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        By default, the Avatar renders in letter mode, extracting the first
        character of the <code>name</code> prop.
      </Typography>
      <ComponentPreview>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar name="Alice" variant="sm" />
          <Avatar name="Bob" variant="md" />
          <Avatar name="Charlie" variant="lg" />
        </Stack>
      </ComponentPreview>
      <ComponentCode
        code={`import { Avatar } from "vortex-ui";

// ...
<Avatar name="Alice" variant="sm" />
<Avatar name="Bob" variant="md" />
<Avatar name="Charlie" variant="lg" />`}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Image Mode
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Set <code>type=&ldquo;image&ldquo;</code> and provide a <code>src</code>
        . If the image fails to load, it will fallback to a default icon.
      </Typography>
      <ComponentPreview>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            type="image"
            src="https://i.pravatar.cc/150?img=32"
            variant="sm"
          />
          <Avatar
            type="image"
            src="https://i.pravatar.cc/150?img=47"
            variant="md"
          />
          <Avatar
            type="image"
            src="https://i.pravatar.cc/150?img=12"
            variant="lg"
          />
          <Avatar type="image" src="invalid-url" variant="md" />
        </Stack>
      </ComponentPreview>
      <ComponentCode
        code={`<Avatar type="image" src="https://i.pravatar.cc/150?img=32" variant="sm" />
<Avatar type="image" src="https://i.pravatar.cc/150?img=47" variant="md" />
<Avatar type="image" src="https://i.pravatar.cc/150?img=12" variant="lg" />
<Avatar type="image" src="invalid-url" variant="md" /> {/* Shows fallback */}`}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, mt: 4, fontSize: "1.25rem" }}
      >
        Editable Avatars
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Setting <code>editable=true</code> allows users to click the avatar to
        change it. In letter mode, it opens a popover to change the name. In
        image mode, it opens a file picker.
      </Typography>
      <ComponentPreview>
        <Stack direction="row" spacing={4} alignItems="center">
          <Stack spacing={1} alignItems="center">
            <Avatar
              editable
              name="Edit Me"
              variant="lg"
              onLetterChange={(newName) => console.log("New name:", newName)}
            />
            <Typography variant="caption" color="text.secondary">
              Letter Mode
            </Typography>
          </Stack>
          <Stack spacing={1} alignItems="center">
            <Avatar
              editable
              type="image"
              src="https://i.pravatar.cc/150?img=3"
              variant="lg"
              onImageChange={(file, url) =>
                console.log("New image selected:", file, url)
              }
            />
            <Typography variant="caption" color="text.secondary">
              Image Mode
            </Typography>
          </Stack>
        </Stack>
      </ComponentPreview>
      <ComponentCode
        code={`// Editable Letter Avatar
<Avatar 
  editable 
  name="Edit Me" 
  variant="lg" 
  onLetterChange={(newName) => console.log("New name:", newName)}
/>

// Editable Image Avatar
<Avatar 
  editable 
  type="image" 
  src="https://i.pravatar.cc/150?img=3" 
  variant="lg" 
  onImageChange={(file, url) => console.log("New image selected:", file.name)}
/>`}
      />

      <ComponentProps propsList={avatarPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
