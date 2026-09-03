"use client";

import React, { useState, useMemo } from "react";
import { Box, Typography, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  DataTableContainer,
  Avatar,
  Link as VortexLink,
  Select,
  TextField,
  CustomFilterDropdown,
} from "vortex-ui";

// 1. Dummy Data in Parent
const DUMMY_CUSTOMERS = [
  { data_uniq_id: "c1", name: "Acme Metal Corp" },
  { data_uniq_id: "c2", name: "Global Industries" },
  { data_uniq_id: "c3", name: "TechNova Systems" },
  { data_uniq_id: "c4", name: "Apex Manufacturing" },
];

const DUMMY_PURCHASE_ORDERS = [
  {
    id: 1,
    data_uniq_id: "po-101",
    purchase_order_num: "PO-2026-001",
    supplier_name: "Acme Metal Corp",
    supplier_contacts: [{ contact: "+91 9876543210", email: "acme@example.com" }],
    supplier_state: "Tamil Nadu",
    grand_total: "₹ 1,45,000",
    formatted_created_date: "02 Sep 2026",
    status: 1,
    notes: "Urgent delivery required",
  },
  {
    id: 2,
    data_uniq_id: "po-102",
    purchase_order_num: "PO-2026-002",
    supplier_name: "Global Industries",
    supplier_contacts: [{ contact: "+91 9123456789", email: "global@example.com" }],
    supplier_state: "Karnataka",
    grand_total: "₹ 3,80,000",
    formatted_created_date: "01 Sep 2026",
    status: 2,
    notes: "Standard terms applied",
  },
  {
    id: 3,
    data_uniq_id: "po-103",
    purchase_order_num: "PO-2026-003",
    supplier_name: "TechNova Systems",
    supplier_contacts: [{ contact: "+91 9988776655", email: "technova@example.com" }],
    supplier_state: "Maharashtra",
    grand_total: "₹ 82,500",
    formatted_created_date: "28 Aug 2026",
    status: 4,
    notes: "Fully received on time",
  },
];

export default function ProjectListExample() {
  const [data] = useState(DUMMY_PURCHASE_ORDERS);
  const [isLoading] = useState(false);
  const [groupMode, setGroupMode] = useState<"compact" | "normal">("compact");

  // Filter & Search states
  const [searchValue, setSearchValue] = useState("");
  const [customerFilter, setCustomerFilter] = useState<string[]>([]);
  const [activeStatusFilter, setActiveStatusFilter] = useState<number[]>([]);

  // Sorting & Pagination states
  const [orderField, setOrderField] = useState("created_date");
  const [orderType, setOrderType] = useState<"asc" | "desc">("desc");
  const [pageNumber, setPageNumber] = useState(1);
  const [limitEnd, setLimitEnd] = useState("15");
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);

  // 2. Table Head Definitions (Compact vs Detailed/Individual)
  const tableHeadCompact = useMemo(
    () => [
      { id: 1, label: "Opportunity Info", value: "branch" },
      { id: 2, label: "Contact Details" },
      {
        id: 3,
        label: "Company Info",
        filterOptions: DUMMY_CUSTOMERS.map((c) => ({
          label: c.name,
          value: c.data_uniq_id,
        })),
      },
      { id: 4, label: "Budget (₹)", value: "grand_total", align: "right" as const },
      { id: 5, label: "Close Date" },
      { id: 6, label: "Source Info" },
      { id: 7, label: "Notes" },
      { id: 8, label: "Priority" },
      { id: 9, label: "Stage" },
    ],
    []
  );

  const tableHeadIndividual = useMemo(
    () => [
      { id: "1.1", label: "#", value: "po_num" },
      { id: "1.2", label: "Opportunity Name" },
      { id: "21", label: "Contact No." },
      { id: "22", label: "Email" },
      { id: "3.1", label: "Company" },
      { id: "3.2", label: "Industry" },
      { id: 4, label: "Budget (₹)", value: "grand_total", align: "right" as const },
      { id: 5, label: "Close Date" },
      { id: 6, label: "Source Info" },
      { id: 7, label: "Notes" },
      { id: 8, label: "Priority" },
      { id: 9, label: "Stage" },
    ],
    []
  );

  const tableHead = groupMode === "compact" ? tableHeadCompact : tableHeadIndividual;

  // 3. Constructing Table Row dataset (td_data_set)
  const td_data_set = useMemo(() => {
    return data.map((item) => {
      const allCells: Record<string | number, { comp: React.ReactNode; align?: 'left' | 'center' | 'right' | 'justify' | 'inherit'; actionIcon?: React.ReactNode }> = {
        1: {
          comp: (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <Avatar variant="md" name={item.supplier_name} />
              <Box>
                <VortexLink href="/examples/user-profile/view" variant="primary" size="md">
                  {item.supplier_name}
                </VortexLink>
                <Typography fontSize="12px" color="text.secondary">
                  {item.purchase_order_num}
                </Typography>
              </Box>
            </Box>
          ),
          actionIcon: (
            <IconButton size="small">
              <MoreVertIcon sx={{ fontSize: 16 }} />
            </IconButton>
          ),
        },
        "1.1": {
          comp: <Typography fontSize="13px" color="text.secondary">{item.purchase_order_num}</Typography>,
        },
        "1.2": {
          comp: (
            <VortexLink href="/examples/user-profile/view" variant="primary" size="md">
              {item.supplier_name}
            </VortexLink>
          ),
        },
        2: {
          comp: (
            <Box>
              <Typography fontSize="13px">{item.supplier_contacts[0]?.contact}</Typography>
              <Typography fontSize="12px" color="text.secondary">{item.supplier_contacts[0]?.email}</Typography>
            </Box>
          ),
        },
        "21": { comp: <Typography fontSize="13px">{item.supplier_contacts[0]?.contact}</Typography> },
        "22": { comp: <Typography fontSize="13px">{item.supplier_contacts[0]?.email}</Typography> },
        3: {
          comp: (
            <Box>
              <Typography fontSize="13px" fontWeight={500}>{item.supplier_name}</Typography>
              <Typography fontSize="12px" color="text.secondary">{item.supplier_state}</Typography>
            </Box>
          ),
        },
        "3.1": { comp: <Typography fontSize="13px" fontWeight={500}>{item.supplier_name}</Typography> },
        "3.2": { comp: <Typography fontSize="13px" color="text.secondary">{item.supplier_state}</Typography> },
        4: { align: "right", comp: <Typography fontSize="13px" fontWeight={600}>{item.grand_total}</Typography> },
        5: { comp: <Typography fontSize="13px">{item.formatted_created_date}</Typography> },
        6: { comp: <Typography fontSize="13px">{item.supplier_state}</Typography> },
        7: { comp: <Typography fontSize="13px">{item.notes}</Typography> },
        8: { comp: <Typography fontSize="13px">High</Typography> },
        9: { comp: <Typography fontSize="13px" color="primary.main">Active</Typography> },
      };

      const rowCells = tableHead.map((h) => allCells[h.id]).filter(Boolean);

      return {
        id: item.data_uniq_id,
        data: rowCells,
      };
    });
  }, [data, tableHead]);

  // 4. Action Component (Bulk Operations)
  const ActionComponent = () => (
    <Select
      variant="icon"
      size="small"
      value=""
      onChange={() => {}}
      options={[
        { value: "active", label: "Mark Active" },
        { value: "inactive", label: "Mark Inactive" },
        { value: "delete", label: "Delete Selected" },
      ]}
      placeholder="Batch Actions"
    />
  );

  // 5. Filter Component Drawer
  const FilterComponent = () => (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <CustomFilterDropdown
        label="Customer"
        selectedValues={customerFilter}
        onChange={(vals) => setCustomerFilter(vals as string[])}
        options={DUMMY_CUSTOMERS.map((c) => ({ value: c.data_uniq_id, label: c.name }))}
        onReset={() => setCustomerFilter([])}
      />
      <CustomFilterDropdown
        label="Status"
        selectedValues={activeStatusFilter}
        onChange={(vals) => setActiveStatusFilter(vals.map(Number))}
        options={[
          { value: 1, label: "Created" },
          { value: 2, label: "Waiting for Arrival" },
          { value: 4, label: "Fully Received" },
        ]}
        onReset={() => setActiveStatusFilter([])}
      />
    </Box>
  );

  // 6. Search Filter Input
  const SearchComponent = (
    <TextField
      size="small"
      placeholder="Search purchase orders..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      fullWidth
    />
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", py: 4 }}>
      <DataTableContainer
        tableHead={tableHead}
        tableRow={td_data_set}
        loading={isLoading}
        pageCount={1}
        pageNumber={pageNumber}
        onPageChange={(_, page) => setPageNumber(page)}
        totalItems={data.length}
        order={orderType}
        orderBy={orderField}
        setOrder={(ord) => setOrderType(ord)}
        setOrderBy={(fld) => setOrderField(fld)}
        selected={selectedItems}
        setSelected={(items) => setSelectedItems(items)}
        limitEnd={limitEnd}
        onLimitChange={(e) => setLimitEnd(e.target.value)}
        groupMode={groupMode}
        onGroupModeChange={(mode) => setGroupMode(mode)}
        SearchComponent={SearchComponent}
        FilterComponent={FilterComponent()}
        hasActiveFilters={customerFilter.length > 0 || activeStatusFilter.length > 0}
        ActionComponent={<ActionComponent />}
      />
    </Box>
  );
}
