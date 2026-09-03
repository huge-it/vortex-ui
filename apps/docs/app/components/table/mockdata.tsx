export const customers = [
  { name: "Acme Corp", data_uniq_id: "CUST-001" },
  { name: "Globex", data_uniq_id: "CUST-002" },
  { name: "Soylent", data_uniq_id: "CUST-003" },
];

export const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Pending", value: "pending" },
];

export const tableHeadCompact = [
  { id: 1, label: "Opportunity Info", value: "opportunity" },
  {
    id: 2,
    label: "Company & Status",
    filterOptions: customers.map((c) => ({
      label: c.name,
      value: c.name,
    })),
  },
];

export const tableHeadDetailed = [
  { id: 1.1, label: "# PO", value: "po_num" },
  { id: 1.2, label: "Opportunity Name" },
  { id: 2, label: "Company" },
  { id: 3, label: "Budget ($)", value: "budget", align: "right" as const },
  { id: 4, label: "Status", value: "status" },
  { id: 5, label: "Assignee", value: "assignee" },
  { id: 6, label: "Date", value: "date" },
  { id: 7, label: "Priority", value: "priority" },
  { id: 8, label: "Region", value: "region" },
  { id: 9, label: "Department", value: "department" },
  { id: 10, label: "Project Manager", value: "project_manager" },
];

export const mockData = Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  po_num: `PO-${1000 + i + 1}`,
  opportunity: ["Cloud Migration", "Security Audit", "ERP Implementation", "IT Support", "Network Upgrade", "Software Licensing"][i % 6],
  company: ["Acme Corp", "Globex", "Soylent", "Initech", "Umbrella Corp", "Stark Industries"][i % 6],
  budget: Math.floor(Math.random() * 50000) + 2000,
  status: ["active", "pending", "inactive"][i % 3],
  assignee: ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"][i % 6],
  date: `2023-10-${String((i % 28) + 1).padStart(2, "0")}`,
  priority: ["High", "Medium", "Low"][i % 3],
  region: ["North America", "Europe", "Asia-Pacific", "Latin America"][i % 4],
  department: ["IT", "Sales", "HR", "Finance", "Operations"][i % 5],
  project_manager: ["Grace", "Heidi", "Ivan", "Judy", "Mallory"][i % 5],
}));
