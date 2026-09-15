"use client";

import React, { useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import {
  VortexTable,
  Avatar,
  Link as VortexLink,
  Select,
  FilterButton,
  TableRowData,
  TableHeadData,
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
    supplier_contacts: [
      { contact: "+91 9876543210", email: "acme@example.com" },
    ],
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
    supplier_contacts: [
      { contact: "+91 9123456789", email: "global@example.com" },
    ],
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
    supplier_contacts: [
      { contact: "+91 9988776655", email: "technova@example.com" },
    ],
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
      {
        id: 1,
        label: "Opportunity Info",
        value: "branch",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Avatar variant="md" name={item.supplier_name} />
            <Box>
              <VortexLink
                href="/examples/user-profile/view"
                variant="primary"
                size="md"
              >
                {item.supplier_name}
              </VortexLink>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "text.secondary"
                }}>
                {item.purchase_order_num}
              </Typography>
            </Box>
          </Box>
        ),
      },
      {
        id: 2,
        label: "Contact Details",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Box>
            <Typography sx={{
              fontSize: "13px"
            }}>
              {item.supplier_contacts[0]?.contact}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "text.secondary"
              }}>
              {item.supplier_contacts[0]?.email}
            </Typography>
          </Box>
        ),
      },
      {
        id: 3,
        label: "Company Info",
        filterOptions: DUMMY_CUSTOMERS.map((c) => ({
          label: c.name,
          value: c.data_uniq_id,
        })),
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 500
              }}>
              {item.supplier_name}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "text.secondary"
              }}>
              {item.supplier_state}
            </Typography>
          </Box>
        ),
      },
      {
        id: 4,
        label: "Budget (₹)",
        value: "grand_total",
        align: "right" as const,
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600
            }}>
            {item.grand_total}
          </Typography>
        ),
      },
      {
        id: 5,
        label: "Close Date",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>{item.formatted_created_date}</Typography>
        ),
      },
      {
        id: 6,
        label: "Source Info",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>{item.supplier_state}</Typography>
        ),
      },
      {
        id: 7,
        label: "Notes",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>{item.notes}</Typography>
        ),
      },
      {
        id: 8,
        label: "Priority",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>High</Typography>
        ),
      },
      {
        id: 9,
        label: "Stage",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              color: "primary.main"
            }}>
            Active
          </Typography>
        ),
      },
    ],
    [],
  );

  const tableHeadDetailed = useMemo(
    () => [
      {
        id: "1.1",
        label: "#",
        value: "po_num",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              color: "text.secondary"
            }}>
            {item.purchase_order_num}
          </Typography>
        ),
      },
      {
        id: "1.2",
        label: "Opportunity Name",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <VortexLink
            href="/examples/user-profile/view"
            variant="primary"
            size="md"
          >
            {item.supplier_name}
          </VortexLink>
        ),
      },
      {
        id: "21",
        label: "Contact No.",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>
            {item.supplier_contacts[0]?.contact}
          </Typography>
        ),
      },
      {
        id: "22",
        label: "Email",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>
            {item.supplier_contacts[0]?.email}
          </Typography>
        ),
      },
      {
        id: "3.1",
        label: "Company",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 500
            }}>
            {item.supplier_name}
          </Typography>
        ),
      },
      {
        id: "3.2",
        label: "Industry",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              color: "text.secondary"
            }}>
            {item.supplier_state}
          </Typography>
        ),
      },
      {
        id: 4,
        label: "Budget (₹)",
        value: "grand_total",
        align: "right" as const,
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600
            }}>
            {item.grand_total}
          </Typography>
        ),
      },
      {
        id: 5,
        label: "Close Date",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>{item.formatted_created_date}</Typography>
        ),
      },
      {
        id: 6,
        label: "Source Info",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>{item.supplier_state}</Typography>
        ),
      },
      {
        id: 7,
        label: "Notes",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>{item.notes}</Typography>
        ),
      },
      {
        id: 8,
        label: "Priority",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography sx={{
            fontSize: "13px"
          }}>High</Typography>
        ),
      },
      {
        id: 9,
        label: "Stage",
        renderCell: (item: (typeof DUMMY_PURCHASE_ORDERS)[0]) => (
          <Typography
            sx={{
              fontSize: "13px",
              color: "primary.main"
            }}>
            Active
          </Typography>
        ),
      },
    ],
    [],
  );

  // 3. Action Component (Bulk Operations)
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

  // 4. Filter Component Drawer
  const filterComponent = (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", p: 2, pt: 0.5 }}>
      <FilterButton
        label="Customer"
        selectedValues={customerFilter}
        onChange={(vals) => setCustomerFilter(vals as string[])}
        options={DUMMY_CUSTOMERS.map((c) => ({
          value: c.data_uniq_id,
          label: c.name,
        }))}
        onReset={() => setCustomerFilter([])}
      />
      <FilterButton
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

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", py: 4 }}>
      <VortexTable
        data={data as unknown as TableRowData[]}
        tableHeadDetailed={tableHeadDetailed as unknown as TableHeadData[]}
        tableHeadCompact={tableHeadCompact as unknown as TableHeadData[]}
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
        filterComponent={filterComponent}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        ActionComponent={ActionComponent}
      />
    </Box>
  );
}
