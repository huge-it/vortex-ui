import React from "react";
import {
  PictureAsPdfOutlined,
  DescriptionOutlined,
  ImageOutlined,
  InsertDriveFileOutlined,
} from "@mui/icons-material";
import { FileItem } from "./Uploads.types";

export const getFileIcon = (fileName: string, sx?: any) => {
  const ext = fileName?.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "pdf":
      return <PictureAsPdfOutlined sx={{ color: "error.main", ...sx }} />;
    case "doc":
    case "docx":
      return <DescriptionOutlined sx={{ color: "info.main", ...sx }} />;
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "webp":
      return <ImageOutlined sx={{ color: "success.main", ...sx }} />;
    default:
      return <InsertDriveFileOutlined sx={{ color: "text.secondary", ...sx }} />;
  }
};

export const ACCEPTED_TYPES_IMAGE: Record<string, string[]> = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/gif": [".gif"],
  "image/webp": [".webp"],
};

export const ACCEPTED_TYPES_DOCUMENT: Record<string, string[]> = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
};

export const ACCEPTED_TYPES_ALL = {
  ...ACCEPTED_TYPES_DOCUMENT,
  ...ACCEPTED_TYPES_IMAGE,
};

export const getAcceptedTypes = (fileTypes: string) => {
  switch (fileTypes) {
    case "image":
      return ACCEPTED_TYPES_IMAGE;
    case "document":
      return ACCEPTED_TYPES_DOCUMENT;
    default:
      return ACCEPTED_TYPES_ALL;
  }
};

export const getAllowedLabel = (fileTypes: string) => {
  switch (fileTypes) {
    case "image":
      return "JPG, PNG, GIF, WEBP";
    case "document":
      return "PDF, DOC";
    default:
      return "PDF, DOC, JPG, PNG";
  }
};

export const isImageType = (type?: string) => type?.startsWith("image/");

// base64 string -> Blob (real object, not a data: URI)
export const base64ToBlob = (base64: string, mimeType: string) => {
  const byteChars = atob(base64);
  const byteNumbers = new Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) {
    byteNumbers[i] = byteChars.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

export const toBase64WithProgress = (file: File, onProgress: (pct: number) => void): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const pct = Math.round((e.loaded / e.total) * 90); // cap at 90 until done
        onProgress(pct);
      }
    };
    reader.onloadend = () => {
      onProgress(100);
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const resolveFileSrc = (file: FileItem, endpoint: string) => {
  if (file.file_path) return `${endpoint}${file.file_path}`;
  if (file.preview_url) return file.preview_url;
  if (file.file_data) {
    const blob = base64ToBlob(file.file_data, file.file_type);
    return URL.createObjectURL(blob);
  }
  return null;
};
