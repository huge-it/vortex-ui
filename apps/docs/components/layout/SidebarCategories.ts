export interface SidebarItem {
  name: string;
  href: string;
}

export interface SidebarCategory {
  title: string;
  items: SidebarItem[];
}

export const componentCategories: SidebarCategory[] = [
  {
    title: "Buttons & Actions",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Button Group", href: "/components/button-group" },
      { name: "FilterButton", href: "/components/filter-button" },
      { name: "Link", href: "/components/link" },
    ],
  },
  {
    title: "Inputs & Text Fields",
    items: [
      { name: "AutoPopulate", href: "/components/auto-populate" },
      { name: "ChipInputField", href: "/components/chip-input" },
      { name: "NumberField", href: "/components/number-field" },
      { name: "Slider", href: "/components/slider" },
      { name: "Text Areas", href: "/components/text-areas" },
      { name: "TextField", href: "/components/textfield" },
    ],
  },
  {
    title: "Layout & Data Display",
    items: [
      { name: "Accordion", href: "/components/accordion" },
      { name: "Avatar", href: "/components/avatar" },
      { name: "Card", href: "/components/card" },
      { name: "DataTable", href: "/components/table" },
      { name: "Grid", href: "/components/grid" },
      { name: "Sheet", href: "/components/sheet" },
    ],
  },
  {
    title: "Modals, Drawers & Feedback",
    items: [
      { name: "Dialog", href: "/components/dialog" },
      { name: "Drawer", href: "/components/drawer" },
      { name: "Snackbar / Toast", href: "/components/snackbar" },
      { name: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    title: "Navigation & Steppers",
    items: [
      { name: "Breadcrumbs", href: "/components/breadcrumbs" },
      { name: "History", href: "/components/history" },
      { name: "PipelineStepper", href: "/components/pipeline-stepper" },
      { name: "Stepper", href: "/components/stepper" },
    ],
  },
  {
    title: "Pickers & Uploads",
    items: [
      { name: "Date Picker", href: "/components/date-picker" },
      { name: "DateRange Picker", href: "/components/date-range-picker" },
      { name: "DateTime Picker", href: "/components/date-time-picker" },
      { name: "Time Picker", href: "/components/time-picker" },
      { name: "Uploads", href: "/components/uploads" },
    ],
  },
  {
    title: "Selections & Toggles",
    items: [
      { name: "Checkbox Group", href: "/components/checkbox-group" },
      { name: "Radio Group", href: "/components/radio-group" },
      { name: "Select", href: "/components/select" },
      { name: "Toggle Switch", href: "/components/toggle-switch" },
    ],
  },
  {
    title: "Status, Loading & Progress",
    items: [
      { name: "Backdrop", href: "/components/backdrop" },
      { name: "Badge", href: "/components/badge" },
      { name: "LinearProgress", href: "/components/progress" },
      { name: "Skeleton", href: "/components/skeleton" },
    ],
  },
];

export const exampleCategories: SidebarCategory[] = [
  {
    title: "Project",
    items: [
      { name: "Create Project", href: "/examples/project/create" },
      { name: "Project Details", href: "/examples/project/view" },
      { name: "Project List", href: "/examples/project/list" },
    ],
  },
  {
    title: "User Profile",
    items: [
      { name: "Create Profile", href: "/examples/user-profile/create" },
      { name: "View Profile", href: "/examples/user-profile/view" },
      { name: "Profile List", href: "/examples/user-profile/list" },
    ],
  },
];

export const foundationCategories: SidebarCategory[] = [
  {
    title: "Design System",
    items: [
      { name: "Themes", href: "/foundations/themes" },
      { name: "Colors", href: "/foundations/colors" },
      { name: "Typography", href: "/foundations/typography" },
      { name: "Breakpoints", href: "/foundations/breakpoints" },
    ],
  },
];
