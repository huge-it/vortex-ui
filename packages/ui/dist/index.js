"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => CustomAccordion,
  AutoPopulate: () => AutoPopulate,
  AutoPopulateItem: () => AutoPopulateItem,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  ChipInput: () => ChipInput,
  ColorModeContext: () => ColorModeContext,
  DataTable: () => DataTable,
  DefaultSelect: () => DefaultSelect,
  Modal: () => Modal,
  NumberField: () => NumberField,
  Select: () => Select,
  TextField: () => TextField,
  Textarea: () => Textarea,
  VortexUIProvider: () => VortexUIProvider,
  useColorMode: () => useColorMode,
  vortexTheme: () => getTheme
});
module.exports = __toCommonJS(index_exports);

// src/theme/classNameSetup.ts
var import_className = require("@mui/material/className");
import_className.unstable_ClassNameGenerator.configure(
  (componentName) => componentName.replace("Mui", "VortexUI")
);

// src/components/Accordion/Accordion.tsx
var React = __toESM(require("react"));
var import_styles = require("@mui/material/styles");
var import_ArrowForwardIosSharp = __toESM(require("@mui/icons-material/ArrowForwardIosSharp"));
var import_Accordion = __toESM(require("@mui/material/Accordion"));
var import_AccordionSummary = __toESM(require("@mui/material/AccordionSummary"));
var import_AccordionDetails = __toESM(require("@mui/material/AccordionDetails"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = (0, import_styles.styled)((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Accordion.default, { disableGutters: true, elevation: 0, ...props }))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:first-of-type)": {
    borderTop: 0
  },
  "&:first-of-type": {
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px"
  },
  "&:last-of-type": {
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px"
  },
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&::before": {
    display: "block !important",
    position: "absolute",
    top: 0,
    left: "16px",
    right: "16px",
    height: "1px",
    backgroundColor: theme.palette.divider,
    opacity: "1 !important"
  },
  "&:first-of-type::before": {
    display: "none !important"
  }
}));
var AccordionSummary = (0, import_styles.styled)((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_AccordionSummary.default,
  {
    expandIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ArrowForwardIosSharp.default, { sx: { fontSize: "0.9rem" } }),
    ...props
  }
))(({ theme }) => ({
  [`& .${import_AccordionSummary.accordionSummaryClasses.expandIconWrapper}.${import_AccordionSummary.accordionSummaryClasses.expanded}`]: {
    transform: "rotate(90deg)"
  },
  ...theme.applyStyles("dark", {})
}));
var AccordionDetails = (0, import_styles.styled)(import_AccordionDetails.default)(({ theme }) => ({
  padding: theme.spacing(2)
}));
var AccordionPanel = ({
  title,
  count,
  items = [],
  children,
  expanded,
  onChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, { expanded, onChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionSummary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_Typography.default,
      {
        component: "span",
        fontWeight: 600,
        fontSize: "14px",
        color: "text.primary",
        children: [
          title,
          " ",
          count !== void 0 && `(${count})`
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionDetails, { children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Stack, { spacing: 0.5, children: items.map((term, idx) => {
      if (!term || typeof term === "string" && term.trim() === "")
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_material.Box, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_Typography.default, { fontSize: "13px", color: "text.primary", children: [
          idx + 1,
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Typography.default, { fontSize: "13px", color: "text.secondary", children: term })
      ] }, idx);
    }) }) })
  ] });
};
function CustomAccordion({
  data,
  singleOpen = false,
  ...singleProps
}) {
  const [expandedIndex, setExpandedIndex] = React.useState(
    singleOpen ? 0 : false
  );
  const handleChange = (panelIndex) => (event, newExpanded) => {
    if (singleOpen) {
      setExpandedIndex(newExpanded ? panelIndex : false);
    }
  };
  if (data && Array.isArray(data)) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Box, { children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      AccordionPanel,
      {
        ...item,
        expanded: singleOpen ? expandedIndex === index : void 0,
        onChange: singleOpen ? handleChange(index) : void 0
      },
      index
    )) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPanel, { ...singleProps });
}

// src/components/AutoPopulate/AutoPopulate.tsx
var import_react2 = require("react");
var import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_material2 = require("@mui/material");

// src/components/TextField/TextField.tsx
var import_icons_material = require("@mui/icons-material");
var import_Box = __toESM(require("@mui/material/Box"));
var import_TextField = __toESM(require("@mui/material/TextField"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_styles2 = require("@mui/material/styles");
var import_react = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var StyledTextField = (0, import_styles2.styled)(
  import_react.default.forwardRef((props, ref) => {
    const { hasLabel, bgColor, variant = "filled", ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_TextField.default,
      {
        ref,
        variant,
        ...rest,
        InputProps: {
          disableUnderline: true,
          ...rest.InputProps,
          sx: {
            overflow: "hidden",
            borderRadius: "10px",
            backgroundColor: "background.paper",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            height: "46px",
            transition: (theme) => theme.transitions.create([
              "border-color",
              "background-color",
              "box-shadow"
            ]),
            "&:hover": { backgroundColor: bgColor || "background.default" },
            "&:before, &:after": { display: "none" },
            "&.Mui-focused": {
              backgroundColor: bgColor || "background.paper",
              borderColor: (theme) => theme.palette.primary.main
            },
            "&.Mui-error": {
              borderColor: (theme) => theme.palette.error.main,
              backgroundColor: bgColor || "background.paper"
            },
            ...rest.InputProps?.sx || {}
          }
        }
      }
    );
  }),
  {
    shouldForwardProp: (prop) => prop !== "hasLabel" && prop !== "bgColor"
  }
)(({ theme, bgColor, hasLabel }) => {
  return {
    "& .VortexUIInputLabel-root.VortexUIInputLabel-filled": {
      transform: `translate(12px, 14px) scale(1)`,
      fontSize: "14px",
      fontWeight: 400,
      "&.VortexUIInputLabel-shrink": {
        transform: "translate(10px, 8px) scale(0.75)",
        lineHeight: 1
      },
      "&.Mui-error": {
        color: theme.palette.error.main
      }
    },
    "& .VortexUIFilledInput-input": {
      padding: "0 10px",
      fontSize: "14px",
      fontWeight: 400,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center"
    },
    "& .VortexUIInputLabel-shrink ~ .VortexUIFilledInput-root .VortexUIFilledInput-input": {
      padding: `24px 10px 0 10px`
    },
    "& label.Mui-focused": {
      color: theme.palette.text.primary
    },
    "& .VortexUIFormHelperText-root": {
      display: "none"
    }
  };
});
var TextField = import_react.default.forwardRef(
  ({ error, sx, bgColor = "#fff", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_Box.default, { sx: { width: props.fullWidth ? "100%" : "auto", ...sx }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        StyledTextField,
        {
          ref,
          error: !!error,
          hasLabel: !!props.label,
          bgColor,
          ...props
        }
      ),
      error && typeof error === "string" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        import_Box.default,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            mt: "8px",
            ml: 0.5
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_icons_material.InfoOutlined,
              {
                sx: { width: 14, height: 14, color: "error.main", flexShrink: 0 }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_Typography2.default,
              {
                sx: {
                  fontSize: "12px",
                  color: "error.main",
                  lineHeight: 1.4,
                  fontWeight: 400
                },
                children: error
              }
            )
          ]
        }
      )
    ] });
  }
);
TextField.displayName = "TextField";

// src/components/AutoPopulate/AutoPopulate.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var scrollbarStyles = `
  .custom-select-menu::-webkit-scrollbar {
    width: 5px;
  }
  .custom-select-menu::-webkit-scrollbar-track {
    background: transparent;
    margin: 6px 0;
  }
  .custom-select-menu::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 35px;
    max-height: 54px;
    min-height: 54px;
  }
  .custom-select-menu::-webkit-scrollbar-thumb:hover {
    background: #BDBDBD;
  }
`;
var getFocusable = () => Array.from(
  document.querySelectorAll(
    'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  )
).filter((el) => el.offsetParent !== null);
var AutoPopulate = ({
  children,
  bgColor,
  label,
  onChange,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = (0, import_react2.useState)("");
  const [displayValue, setDisplayValue] = (0, import_react2.useState)("");
  const [open, setOpen] = (0, import_react2.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react2.useState)(-1);
  const anchorRef = (0, import_react2.useRef)(null);
  const menuItemRefs = (0, import_react2.useRef)([]);
  const wrapperRef = (0, import_react2.useRef)(null);
  const hasInteractedRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (typeof document !== "undefined") {
      const styleTag = document.getElementById("custom-select-scrollbar");
      if (!styleTag) {
        const s = document.createElement("style");
        s.id = "custom-select-scrollbar";
        s.textContent = scrollbarStyles;
        document.head.appendChild(s);
      }
    }
  }, []);
  const childArray = import_react2.Children.toArray(children).filter(
    Boolean
  );
  const labelMap = {};
  childArray.forEach((child) => {
    if (child.props?.value !== void 0) {
      labelMap[child.props.value] = {
        label: child.props?.children?.toString() || "",
        subtitle: child.props?.subtitle || ""
      };
    }
  });
  const filteredChildren = inputValue ? childArray.filter((child) => {
    const text = child.props?.children?.toString()?.toLowerCase() || "";
    const sub = child.props?.subtitle?.toLowerCase() || "";
    const q = inputValue.toLowerCase();
    return text.includes(q) || sub.includes(q);
  }) : childArray;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDisplayValue(e.target.value);
    setOpen(true);
    setFocusedIndex(-1);
    hasInteractedRef.current = true;
  };
  const handleInputFocus = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFocusedIndex(-1);
    if (inputValue === "" && hasInteractedRef.current) {
      setDisplayValue("");
      if (value !== void 0 && value !== "" && onChange) {
        onChange({ target: { value: "" } });
      }
    } else if (value !== void 0 && labelMap[value]) {
      setDisplayValue(labelMap[value].label);
    } else {
      setDisplayValue("");
    }
    setInputValue("");
    hasInteractedRef.current = false;
  };
  const handleSelect = (child) => {
    const selectedValue = child.props?.value;
    const selectedLabel = child.props?.children?.toString() || "";
    setDisplayValue(selectedLabel);
    setInputValue("");
    setOpen(false);
    setFocusedIndex(-1);
    hasInteractedRef.current = false;
    if (onChange) onChange({ target: { value: selectedValue } });
    setTimeout(() => {
      const focusable = getFocusable();
      const current = anchorRef.current?.querySelector("input");
      const idx = focusable.findIndex((el) => el === current);
      if (idx !== -1 && focusable[idx + 1])
        focusable[idx + 1].focus();
    }, 0);
  };
  const focusItem = (index) => {
    setFocusedIndex(index);
    menuItemRefs.current[index]?.focus();
  };
  const handleInputKeyDown = (0, import_react2.useCallback)(
    (e) => {
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter") setOpen(true);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(filteredChildren.length - 1);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [open, filteredChildren]
  );
  const handleItemKeyDown = (0, import_react2.useCallback)(
    (e, index, child) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusItem((index + 1) % filteredChildren.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index === 0) {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        } else {
          focusItem(index - 1);
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const next2 = index + 1;
        if (next2 < filteredChildren.length) {
          focusItem(next2);
        } else {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(child);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [filteredChildren, onChange]
  );
  const shownValue = open ? inputValue !== "" ? inputValue : displayValue : displayValue;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material2.ClickAwayListener, { onClickAway: handleClose, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_material2.Box, { ref: wrapperRef, sx: { display: "contents" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_material2.Box,
      {
        ref: anchorRef,
        sx: { position: "relative", display: "inline-flex", width: "100%" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            TextField,
            {
              bgColor,
              label,
              value: shownValue,
              onChange: handleInputChange,
              onFocus: handleInputFocus,
              onKeyDown: handleInputKeyDown,
              autoComplete: "off",
              fullWidth: true,
              ...props
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_material2.Box,
            {
              onClick: (e) => {
                e.stopPropagation();
                setOpen((prev2) => !prev2);
              },
              sx: {
                position: "absolute",
                right: 8,
                top: "50%",
                transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
                transition: "transform 0.2s",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "rgba(0,0,0,0.54)"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_KeyboardArrowDown.default, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_material2.Popper,
      {
        open,
        anchorEl: anchorRef.current,
        placement: "bottom-start",
        style: {
          zIndex: 1300,
          width: anchorRef.current?.offsetWidth
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_material2.Paper,
          {
            elevation: 0,
            sx: {
              mt: 0.5,
              borderRadius: "10px",
              border: "1px solid #D6DEEA",
              maxHeight: 258,
              overflowY: "auto",
              bgcolor: "#FFFFFF",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)"
            },
            className: "custom-select-menu",
            children: filteredChildren.length > 0 ? filteredChildren.map((child, index) => {
              const primaryLabel = child.props?.children?.toString() || "";
              const subtitle = child.props?.subtitle || "";
              const isFocused = focusedIndex === index;
              return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                import_material2.Box,
                {
                  ref: (el) => {
                    menuItemRefs.current[index] = el;
                  },
                  tabIndex: isFocused ? 0 : -1,
                  role: "option",
                  "aria-selected": value === child.props?.value,
                  onClick: () => handleSelect(child),
                  onKeyDown: (e) => handleItemKeyDown(e, index, child),
                  sx: {
                    px: 1.8,
                    py: 1,
                    cursor: "pointer",
                    outline: "none",
                    pt: index === 0 ? 1.2 : 1,
                    pb: index === filteredChildren.length - 1 ? 1.2 : 1,
                    backgroundColor: value === child.props?.value ? "rgba(25, 118, 210, 0.06)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.06)"
                    },
                    "&:focus": {
                      backgroundColor: "rgba(25, 118, 210, 0.08)"
                    }
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_material2.Typography,
                      {
                        sx: {
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#313952",
                          lineHeight: 1.5
                        },
                        children: primaryLabel
                      }
                    ),
                    subtitle && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_material2.Typography,
                      {
                        sx: {
                          fontSize: "11px",
                          fontWeight: 400,
                          color: "#6F778F",
                          lineHeight: 1.5,
                          mt: 0.2
                        },
                        children: subtitle
                      }
                    )
                  ]
                },
                child.key ?? index
              );
            }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material2.Box, { sx: { px: 2, py: 1.5, fontSize: "13px", color: "#9CA3AF" }, children: "No results found" })
          }
        )
      }
    )
  ] }) });
};

// src/components/AutoPopulate/AutoPopulateItem.tsx
var AutoPopulateItem = () => null;

// src/components/Button/Button.tsx
var import_material3 = require("@mui/material");
var import_icons_material2 = require("@mui/icons-material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var SIZE_MAP = {
  lg: {
    height: 40,
    fontSize: 14,
    px: 2.5,
    borderRadius: "10px",
    iconSize: 20,
    gap: "8px"
  },
  md: {
    height: 36,
    fontSize: 13,
    px: 2,
    borderRadius: "9px",
    iconSize: 18,
    gap: "7px"
  },
  sm: {
    height: 32,
    fontSize: 12,
    px: 1.5,
    borderRadius: "8px",
    iconSize: 16,
    gap: "6px"
  }
};
var ICON_ONLY_SIZE_MAP = {
  lg: { box: 36, iconSize: 22, borderRadius: "10px" },
  md: { box: 32, iconSize: 20, borderRadius: "9px" },
  sm: { box: 28, iconSize: 18, borderRadius: "8px" }
};
var Button = ({
  size = "md",
  variant = "filled",
  severity = "primary",
  icon,
  iconPosition = "start",
  iconOnly = false,
  loading = false,
  loadingText,
  disabled,
  children,
  sx,
  ...rest
}) => {
  const { height, fontSize, px, borderRadius, iconSize, gap } = SIZE_MAP[size] ?? SIZE_MAP.md;
  const theme = (0, import_material3.useTheme)();
  const isDisabled = disabled || loading;
  const paletteColor = theme.palette[severity] || theme.palette.primary;
  const colors2 = {
    main: paletteColor.main,
    hover: paletteColor.hover || paletteColor.dark,
    light: paletteColor.disabledBackground || theme.palette.action.hover,
    lightHover: paletteColor.disabled || theme.palette.action.selected,
    disabledMain: paletteColor.disabled || theme.palette.action.disabledBackground,
    disabledLight: "transparent",
    disabledText: paletteColor.disabled || theme.palette.action.disabled,
    disabledBorder: paletteColor.disabledBackground || theme.palette.action.disabledBackground
  };
  const filledSx = {
    bgcolor: colors2.main,
    color: "#fff",
    border: "none",
    "&:hover": { bgcolor: colors2.hover },
    [`&.${import_material3.buttonClasses.disabled}`]: {
      bgcolor: colors2.disabledMain,
      color: "#ffffff"
    }
  };
  const outlinedSx = {
    bgcolor: colors2.light,
    color: colors2.main,
    border: `1.5px solid ${colors2.main}`,
    "&:hover": {
      bgcolor: colors2.lightHover,
      border: `1.5px solid ${colors2.hover}`
    },
    [`&.${import_material3.buttonClasses.disabled}`]: {
      bgcolor: colors2.disabledLight,
      color: colors2.disabledText,
      border: `1.5px solid ${colors2.disabledBorder}`
    }
  };
  const ghostSx = {
    bgcolor: "transparent",
    color: colors2.main,
    border: "none",
    boxShadow: "none",
    "&:hover": { bgcolor: colors2.light, border: "none" },
    [`&.${import_material3.buttonClasses.disabled}`]: { color: colors2.disabledText }
  };
  const textSx = {
    bgcolor: "transparent",
    color: colors2.main,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      bgcolor: "transparent",
      color: colors2.hover,
      textDecoration: "underline"
    },
    [`&.${import_material3.buttonClasses.disabled}`]: { color: colors2.disabledText }
  };
  const variantSxMap = {
    filled: filledSx,
    outlined: outlinedSx,
    ghost: ghostSx,
    text: textSx
  };
  const variantSx = variantSxMap[variant] ?? filledSx;
  const spinnerColor = variant === "filled" ? "#fff" : isDisabled ? colors2.disabledText : colors2.main;
  if (iconOnly) {
    const {
      box,
      iconSize: ionSize,
      borderRadius: iconBorderRadius
    } = ICON_ONLY_SIZE_MAP[size] ?? ICON_ONLY_SIZE_MAP.md;
    const iconOnlyVariantSx = variant === "text" ? { ...textSx, px: 0 } : variantSx;
    const spinner2 = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material3.CircularProgress,
      {
        size: ionSize - 2,
        thickness: 5,
        sx: { color: spinnerColor, display: "block" }
      }
    );
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material3.Button,
      {
        disableElevation: true,
        disabled: isDisabled,
        sx: {
          minWidth: box,
          width: box,
          height: box,
          padding: 0,
          borderRadius: iconBorderRadius,
          [`& svg:not(.${import_material3.circularProgressClasses.svg})`]: {
            fontSize: ionSize,
            width: ionSize,
            height: ionSize
          },
          ...iconOnlyVariantSx,
          ...sx
        },
        ...rest,
        children: loading ? spinner2 : icon ?? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_material2.Star, { sx: { fontSize: ionSize } })
      }
    );
  }
  const spinner = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_material3.CircularProgress,
    {
      size: iconSize - 2,
      thickness: 5,
      sx: { color: spinnerColor, display: "block" }
    }
  );
  const content = loading ? loadingText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { textTransform: "capitalize" }, children: loadingText }) : children : children;
  const activeIconPosition = icon ? iconPosition : loading ? "start" : null;
  const startIcon = activeIconPosition === "start" ? loading ? spinner : icon : null;
  const endIcon = activeIconPosition === "end" ? loading ? spinner : icon : null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_material3.Button,
    {
      variant: variant === "filled" ? "contained" : variant === "outlined" ? "outlined" : "text",
      disableElevation: true,
      disabled: isDisabled,
      startIcon,
      endIcon,
      sx: {
        textTransform: "none",
        borderRadius,
        height,
        px: variant === "text" ? 0.5 : px,
        py: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        lineHeight: 1,
        minWidth: 90,
        fontWeight: 500,
        letterSpacing: 0,
        gap,
        [`& .${import_material3.buttonClasses.startIcon}`]: {
          marginRight: 0,
          marginLeft: "-4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [`& svg:not(.${import_material3.circularProgressClasses.svg})`]: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize
          }
        },
        [`& .${import_material3.buttonClasses.endIcon}`]: {
          marginLeft: 0,
          marginRight: "-4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [`& svg:not(.${import_material3.circularProgressClasses.svg})`]: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize
          }
        },
        ...variant === "ghost" || variant === "text" ? { border: "none", "&:hover": { border: "none" } } : {},
        ...variantSx,
        ...sx
      },
      ...rest,
      children: content
    }
  );
};

// src/components/ButtonGroup/ButtonGroup.tsx
var import_react7 = require("react");
var import_material7 = require("@mui/material");

// src/components/Select/Select.tsx
var import_react5 = __toESM(require("react"));
var import_material6 = require("@mui/material");
var import_react6 = require("react");

// src/components/Select/SearchableSelect.tsx
var import_react3 = require("react");
var import_material4 = require("@mui/material");
var import_KeyboardArrowDown2 = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var SEARCH_THRESHOLD = 2;
var scrollbarStyles2 = `
  .custom-select-menu::-webkit-scrollbar {
    width: 5px;
  }
  .custom-select-menu::-webkit-scrollbar-track {
    background: transparent;
    margin: 6px 0;
  }
  .custom-select-menu::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 35px;
    max-height: 54px;
    min-height: 54px;
  }
  .custom-select-menu::-webkit-scrollbar-thumb:hover {
    background: #BDBDBD;
  }
`;
if (typeof document !== "undefined") {
  const styleTag = document.getElementById("custom-select-scrollbar");
  if (!styleTag) {
    const s = document.createElement("style");
    s.id = "custom-select-scrollbar";
    s.textContent = scrollbarStyles2;
    document.head.appendChild(s);
  }
}
var getFocusable2 = () => Array.from(
  document.querySelectorAll(
    'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  )
).filter((el) => el.offsetParent !== null);
var SearchableSelect = ({
  children,
  bgColor,
  label,
  onChange,
  value,
  disabled,
  ...props
}) => {
  const [inputValue, setInputValue] = (0, import_react3.useState)("");
  const [displayValue, setDisplayValue] = (0, import_react3.useState)("");
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [focusedIndex, setFocusedIndex] = (0, import_react3.useState)(-1);
  const anchorRef = (0, import_react3.useRef)(null);
  const menuItemRefs = (0, import_react3.useRef)([]);
  const wrapperRef = (0, import_react3.useRef)(null);
  const childArray = import_react3.Children.toArray(children).filter(Boolean);
  const showSearch = childArray.length > SEARCH_THRESHOLD;
  const labelMap = {};
  childArray.forEach((child) => {
    if (child.props?.value !== void 0) {
      labelMap[child.props.value] = {
        label: child.props?.children?.toString() || "",
        subtitle: child.props?.subtitle || "",
        icon: child.props?.icon || null
      };
    }
  });
  const filteredChildren = showSearch && inputValue ? childArray.filter((child) => {
    const text = child.props?.children?.toString()?.toLowerCase() || "";
    const sub = child.props?.subtitle?.toLowerCase() || "";
    const q = inputValue.toLowerCase();
    return text.includes(q) || sub.includes(q);
  }) : childArray;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDisplayValue(e.target.value);
    setOpen(true);
    setFocusedIndex(-1);
  };
  const handleInputFocus = () => {
    if (!disabled) setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFocusedIndex(-1);
    if (value !== void 0 && labelMap[value]) {
      setDisplayValue(labelMap[value].label);
      setInputValue("");
    } else {
      setInputValue("");
    }
  };
  const handleSelect = (child) => {
    const selectedValue = child.props?.value;
    const selectedLabel = child.props?.children?.toString() || "";
    setDisplayValue(selectedLabel);
    setInputValue("");
    setOpen(false);
    setFocusedIndex(-1);
    if (onChange && selectedValue !== void 0) onChange({ target: { value: selectedValue } });
    setTimeout(() => {
      const focusable = getFocusable2();
      const current = anchorRef.current?.querySelector("input");
      const idx = focusable.findIndex((el) => el === current);
      if (idx !== -1 && focusable[idx + 1]) focusable[idx + 1].focus();
    }, 0);
  };
  const focusItem = (index) => {
    setFocusedIndex(index);
    menuItemRefs.current[index]?.focus();
  };
  const handleInputKeyDown = (0, import_react3.useCallback)(
    (e) => {
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter") setOpen(true);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(filteredChildren.length - 1);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [open, filteredChildren]
  );
  const handleItemKeyDown = (0, import_react3.useCallback)(
    (e, index, child) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusItem((index + 1) % filteredChildren.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index === 0) {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        } else {
          focusItem(index - 1);
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const next2 = index + 1;
        if (next2 < filteredChildren.length) {
          focusItem(next2);
        } else {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(child);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [filteredChildren, onChange]
  );
  const shownValue = open ? inputValue !== "" ? inputValue : displayValue : displayValue;
  const selectedIcon = value !== void 0 && labelMap[value]?.icon ? labelMap[value].icon : null;
  const hasIcon = !!selectedIcon && !open;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material4.ClickAwayListener, { onClickAway: handleClose, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material4.Box, { ref: wrapperRef, sx: { display: "contents" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      import_material4.Box,
      {
        ref: anchorRef,
        sx: { position: "relative", display: "inline-flex", width: "100%" },
        children: [
          hasIcon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_material4.Box,
            {
              sx: {
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
                mt: label ? "6px" : 0
              },
              children: selectedIcon
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            TextField,
            {
              fullWidth: true,
              size: "small",
              label,
              value: shownValue,
              onChange: handleInputChange,
              onFocus: handleInputFocus,
              onKeyDown: handleInputKeyDown,
              autoComplete: "off",
              disabled,
              bgColor,
              ...props,
              InputProps: {
                sx: {
                  ...hasIcon && {
                    "& .VortexUIFilledInput-input": {
                      paddingLeft: "32px !important"
                    }
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_material4.Box,
            {
              onClick: (e) => {
                if (disabled) return;
                e.stopPropagation();
                setOpen((prev2) => !prev2);
              },
              sx: {
                position: "absolute",
                right: 8,
                top: "50%",
                transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
                transition: "transform 0.2s",
                cursor: disabled ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                color: "rgba(0,0,0,0.54)"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_KeyboardArrowDown2.default, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_material4.Popper,
      {
        open,
        anchorEl: anchorRef.current,
        placement: "bottom-start",
        style: {
          zIndex: 1300,
          width: anchorRef.current?.offsetWidth
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_material4.Paper,
          {
            elevation: 0,
            sx: {
              mt: 0.5,
              borderRadius: "10px",
              border: "1px solid #D6DEEA",
              maxHeight: 258,
              overflowY: "auto",
              bgcolor: "#FFFFFF",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)"
            },
            className: "custom-select-menu",
            children: filteredChildren.length > 0 ? filteredChildren.map((child, index) => {
              const primaryLabel = child.props?.children?.toString() || "";
              const subtitle = child.props?.subtitle || "";
              const icon = child.props?.icon || null;
              const isFocused = focusedIndex === index;
              const isSelected = value === child.props?.value;
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                import_material4.Box,
                {
                  ref: (el) => {
                    if (el) menuItemRefs.current[index] = el;
                  },
                  tabIndex: isFocused ? 0 : -1,
                  role: "option",
                  "aria-selected": isSelected,
                  onClick: () => handleSelect(child),
                  onKeyDown: (e) => handleItemKeyDown(e, index, child),
                  sx: {
                    px: 1.5,
                    py: 0.75,
                    cursor: "pointer",
                    outline: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: isSelected ? "rgba(25, 118, 210, 0.06)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.06)"
                    },
                    "&:focus": {
                      backgroundColor: "rgba(25, 118, 210, 0.08)"
                    }
                  },
                  children: [
                    icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                      import_material4.Box,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          width: 24,
                          justifyContent: "center"
                        },
                        children: icon
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                      import_material4.Box,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                            import_material4.Typography,
                            {
                              sx: {
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#313952",
                                lineHeight: 1.5,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              },
                              children: primaryLabel
                            }
                          ),
                          subtitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                            import_material4.Typography,
                            {
                              sx: {
                                fontSize: "11px",
                                fontWeight: 400,
                                color: "#6F778F",
                                lineHeight: 1.5,
                                mt: 0.2
                              },
                              children: subtitle
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                child.key ?? index
              );
            }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material4.Box, { sx: { px: 2, py: 1.5, fontSize: "13px", color: "#9CA3AF" }, children: "No results found" })
          }
        )
      }
    )
  ] }) });
};

// src/components/Select/IconSelect.tsx
var import_react4 = require("react");
var import_material5 = require("@mui/material");
var import_KeyboardArrowDown3 = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconSelect = ({
  value,
  onChange,
  options = [],
  disabled = false,
  label,
  placeholder,
  fullWidth = false,
  size = "small",
  bgColor = "#FFFFFF",
  error,
  helperText,
  name,
  id,
  sx,
  ...rest
}) => {
  const generatedId = (0, import_react4.useId)();
  const selectId = id || generatedId;
  const labelId = `${selectId}-label`;
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const selectedOption = options.find((opt) => String(opt.value) === String(value));
  const selectNode = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    TextField,
    {
      select: true,
      id: selectId,
      label,
      name,
      value: value ?? "",
      onChange: handleChange,
      disabled,
      error,
      helperText,
      fullWidth,
      size,
      bgColor,
      SelectProps: {
        displayEmpty: true,
        IconComponent: import_KeyboardArrowDown3.default,
        renderValue: (selected) => {
          if (!selectedOption || selectedOption.value === "") {
            if (placeholder) {
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_material5.Typography,
                {
                  component: "span",
                  sx: { fontSize: 13, color: "#9CA3AF" },
                  children: placeholder
                }
              );
            }
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_material5.Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            (selectedOption.icon || selectedOption.img) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_material5.Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                  borderRadius: selectedOption.img ? "50%" : 0,
                  overflow: selectedOption.img ? "hidden" : "visible"
                },
                children: selectedOption.img ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Box, { component: "img", src: selectedOption.img, alt: "", sx: { width: "100%", height: "100%", objectFit: "cover" } }) : selectedOption.icon
              }
            ),
            selectedOption.label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_material5.Typography,
              {
                component: "span",
                sx: {
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#1F2937",
                  lineHeight: 1
                },
                children: selectedOption.label
              }
            )
          ] });
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 0.5,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E5E7EB",
              "& .MuiList-root": { py: 1 }
            }
          }
        }
      },
      sx: {
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          py: 0,
          pl: 1.5,
          pr: 4,
          height: "100%",
          boxSizing: "border-box"
        },
        ...!label ? sx : {}
      },
      ...rest,
      children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        import_material5.MenuItem,
        {
          value: opt.value,
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            px: 1.8,
            py: 1,
            fontSize: 13,
            color: "#374151",
            "&:hover": { bgcolor: "#F0F5FF" },
            "&.Mui-selected": { bgcolor: "#F9FAFB", fontWeight: 500 },
            "&.Mui-selected:hover": { bgcolor: "#F0F5FF" }
          },
          children: [
            (opt.icon || opt.img) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_material5.Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  width: 18,
                  height: 18,
                  justifyContent: "center",
                  flexShrink: 0,
                  borderRadius: opt.img ? "50%" : 0,
                  overflow: opt.img ? "hidden" : "visible"
                },
                children: opt.img ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Box, { component: "img", src: opt.img, alt: "", sx: { width: "100%", height: "100%", objectFit: "cover" } }) : opt.icon
              }
            ),
            opt.label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material5.Typography, { component: "span", sx: { fontSize: 13 }, children: opt.label })
          ]
        },
        opt.value
      ))
    }
  );
  return selectNode;
};

// src/components/Select/Select.tsx
var import_icons_material3 = require("@mui/icons-material");
var import_jsx_runtime7 = require("react/jsx-runtime");
var OPTIONS = {
  1: { label: "Low", value: 1, color: "#4772FF" },
  2: { label: "Medium", value: 2, color: "#FF8447" },
  3: { label: "High", value: 3, color: "#FF4750" }
};
var DefaultSelect = ({
  value,
  recordId,
  onUpdate,
  options = OPTIONS,
  disabled = false,
  label,
  placeholder,
  fullWidth = false,
  size = "small",
  bgColor = "#FFFFFF",
  error,
  helperText,
  name,
  id,
  sx
}) => {
  const generatedId = import_react5.default.useId();
  const selectId = id || generatedId;
  const labelId = `${selectId}-label`;
  const [current, setCurrent] = (0, import_react6.useState)(value || 2);
  const [loading, setLoading] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    setCurrent(value || 2);
  }, [value]);
  const handleChange = async (e) => {
    const value2 = e.target.value;
    if (value2 === current) return;
    setLoading(true);
    try {
      if (onUpdate && recordId !== void 0) {
        await onUpdate(recordId, value2);
      }
      setCurrent(value2);
    } catch (err) {
      console.error("Value update failed:", err);
    } finally {
      setLoading(false);
    }
  };
  const selectedOption = options[current] || Object.values(options)[0] || OPTIONS[2];
  const selectNode = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    TextField,
    {
      select: true,
      id: selectId,
      label,
      name,
      value: current ?? "",
      onChange: handleChange,
      disabled: disabled || loading,
      error,
      helperText,
      fullWidth,
      size,
      bgColor,
      SelectProps: {
        displayEmpty: true,
        IconComponent: import_icons_material3.ExpandMore,
        renderValue: (selected) => {
          const cfg = options[selected] || selectedOption;
          if (!cfg) {
            if (placeholder) {
              return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_material6.Typography,
                {
                  component: "span",
                  sx: { fontSize: 13, color: "#9CA3AF" },
                  children: placeholder
                }
              );
            }
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material6.Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            loading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material6.Box,
              {
                sx: {
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  border: `2px solid ${cfg.color}`,
                  borderTopColor: "transparent",
                  animation: "spin 0.6s linear infinite",
                  flexShrink: 0,
                  "@keyframes spin": { to: { transform: "rotate(360deg)" } }
                }
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material6.Box,
              {
                sx: {
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: cfg.color,
                  flexShrink: 0
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material6.Typography,
              {
                component: "span",
                sx: {
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#1F2937",
                  lineHeight: 1
                },
                children: cfg.label
              }
            )
          ] });
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 0.5,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #E5E7EB",
              "& .MuiList-root": { py: 1 }
            }
          }
        }
      },
      sx: {
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          py: 0,
          pl: 1.5,
          pr: 4,
          height: "100%",
          boxSizing: "border-box"
        },
        ...!label ? sx : {}
      },
      children: Object.entries(options).map(([key, opt]) => {
        const val = isNaN(Number(key)) ? key : Number(key);
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_material6.MenuItem,
          {
            value: val,
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 1.8,
              py: 1,
              fontSize: 13,
              color: "#374151",
              "&:hover": { bgcolor: "#F0F5FF" },
              "&.Mui-selected": { bgcolor: "#F9FAFB", fontWeight: 500 },
              "&.Mui-selected:hover": { bgcolor: "#F0F5FF" }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_material6.Box,
                {
                  sx: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: opt.color,
                    flexShrink: 0
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material6.Typography, { component: "span", sx: { fontSize: 13 }, children: opt.label })
            ]
          },
          key
        );
      })
    }
  );
  return selectNode;
};
var Select = (props) => {
  if (props.variant === "searchable") {
    const { variant, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SearchableSelect, { ...rest });
  }
  if (props.variant === "icon") {
    const { variant, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconSelect, { ...rest });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DefaultSelect, { ...props });
};

// src/components/ButtonGroup/ButtonGroup.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var DefaultIcons = {
  video: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "path",
    {
      d: "M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
      stroke: color,
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  location: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "path",
    {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5z",
      fill: color
    }
  ) }),
  phone: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "path",
    {
      d: "M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.56 21 3 13.44 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z",
      fill: color
    }
  ) }),
  whatsapp: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: color, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.44-1.43a9.84 9.84 0 004.55 1.13c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 13.49c-.23.64-1.36 1.22-1.87 1.28-.48.06-1.08.08-1.74-.11-.4-.12-.91-.28-1.56-.55-2.73-1.18-4.5-3.94-4.64-4.12-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.98.95-2.25.23-.26.5-.33.67-.33.17 0 .33 0 .48.01.15.01.36-.06.56.43.2.49.69 1.68.75 1.8.06.12.1.26.02.41-.08.15-.12.25-.24.38-.12.13-.25.29-.36.39-.12.11-.24.22-.1.44.14.22.62.97 1.32 1.57.9.79 1.67 1.04 1.9 1.16.23.12.36.1.5-.06.13-.17.57-.67.72-.9.15-.23.3-.19.5-.11.2.08 1.26.59 1.48.7.22.11.36.17.41.26.05.09.05.53-.18 1.17z" }) }),
  email: (color) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        stroke: color,
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "polyline",
      {
        points: "22,6 12,13 2,6",
        stroke: color,
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] })
};
var ACTIVE_COLOR = "#4772FF";
var DynamicFields = ({
  method,
  values,
  onChange,
  disabled,
  bgColor
}) => {
  if (!method) return null;
  const handlePhoneChange = (fieldName, rawValue, maxLength) => {
    let digitsOnly = rawValue.replace(/\D/g, "");
    if (maxLength) digitsOnly = digitsOnly.slice(0, maxLength);
    onChange(fieldName, digitsOnly);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_material7.Box,
    {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        mt: 1.5,
        animation: "cmsIn 0.22s ease",
        "@keyframes cmsIn": {
          from: { opacity: 0, transform: "translateY(-4px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        }
      },
      children: method.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material7.Box, { sx: { flex: "1 1 160px", minWidth: 140 }, children: field.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Select,
        {
          variant: "icon",
          label: field.label,
          placeholder: field.label,
          value: values?.[field.name] || "",
          onChange: (val) => onChange(field.name, String(val)),
          disabled,
          options: field.options || [],
          fullWidth: true,
          size: "small",
          bgColor
        }
      ) : field.type === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: field.label,
          value: values?.[field.name] || "",
          onChange: (e) => handlePhoneChange(field.name, e.target.value, field.maxLength),
          onKeyDown: (e) => {
            const allowedKeys = [
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Tab",
              "Home",
              "End"
            ];
            if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey)
              return;
            if (!/^[0-9]$/.test(e.key)) {
              e.preventDefault();
            }
          },
          onPaste: (e) => {
            const pasted = e.clipboardData.getData("text");
            if (/\D/.test(pasted)) {
              e.preventDefault();
              handlePhoneChange(
                field.name,
                (values?.[field.name] || "") + pasted,
                field.maxLength
              );
            }
          },
          disabled,
          inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: field.maxLength || void 0
          },
          sx: {
            "& .VortexUIOutlinedInput-root": {
              fontSize: 13,
              bgcolor: bgColor || "#fff",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#E5E7EB" },
              "&.Mui-focused fieldset": { borderColor: ACTIVE_COLOR }
            }
          }
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: field.label,
          value: values?.[field.name] || "",
          onChange: (e) => onChange(field.name, e.target.value),
          disabled,
          sx: {
            "& .VortexUIOutlinedInput-root": {
              fontSize: 13,
              bgcolor: bgColor || "#fff",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#E5E7EB" },
              "&.Mui-focused fieldset": { borderColor: ACTIVE_COLOR }
            }
          }
        }
      ) }, field.name))
    }
  );
};
var SIZE_HEIGHTS = {
  sm: 32,
  md: 36,
  lg: 40
};
var ButtonGroup = ({
  value,
  onChange,
  disabled = false,
  bgColor = "#FFFFFF",
  variant = "icon",
  size = "lg",
  buttonHeight: buttonHeightProp,
  buttonWidth: buttonWidthProp,
  methods: methodsProp,
  fullWidth = false
}) => {
  const methods = methodsProp || [];
  const showIcon = variant === "icon" || variant === "both";
  const showText = variant === "text" || variant === "both";
  const buttonWidth = buttonWidthProp ?? void 0;
  const buttonHeight = buttonHeightProp ?? SIZE_HEIGHTS[size] ?? 40;
  const activeKey = value?.type || null;
  const activeIdx = methods.findIndex((m) => m.key === activeKey);
  const activeMethod = activeIdx !== -1 ? methods[activeIdx] : null;
  const [hoveredIdx, setHoveredIdx] = (0, import_react7.useState)(null);
  const buttonRefs = (0, import_react7.useRef)([]);
  const [pillStyle, setPillStyle] = (0, import_react7.useState)({ left: 0, width: 0 });
  (0, import_react7.useLayoutEffect)(() => {
    if (activeIdx !== -1 && buttonRefs.current[activeIdx]) {
      const el = buttonRefs.current[activeIdx];
      if (el) {
        setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }
  }, [activeIdx, buttonWidth, variant]);
  const handleSelect = (key) => {
    if (disabled) return;
    if (onChange) {
      onChange(
        activeKey === key ? { type: null, fields: {} } : { type: key, fields: {} }
      );
    }
  };
  const handleFieldChange = (fieldName, fieldVal) => {
    if (onChange) {
      onChange({
        type: activeKey,
        fields: { ...value?.fields || {}, [fieldName]: fieldVal }
      });
    }
  };
  const resolveIcon = (m, color) => {
    if (!showIcon) return null;
    if (m.icon) return typeof m.icon === "function" ? m.icon(color) : m.icon;
    if (DefaultIcons[m.key]) return DefaultIcons[m.key](color);
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material7.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_material7.Box,
      {
        sx: {
          position: "relative",
          display: "inline-flex",
          height: buttonHeight,
          borderRadius: "10px",
          bgcolor: "#F3F4F6",
          // Segmented control background
          p: "4px",
          // Inner padding
          width: fullWidth ? "100%" : buttonWidth ? methods.length * buttonWidth + (methods.length - 1) + 8 : "max-content",
          userSelect: "none"
        },
        children: [
          activeMethod && pillStyle.width > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_material7.Box,
            {
              sx: {
                position: "absolute",
                top: "4px",
                height: "calc(100% - 8px)",
                left: pillStyle.left,
                width: pillStyle.width,
                bgcolor: ACTIVE_COLOR,
                borderRadius: "6px",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                zIndex: 0,
                pointerEvents: "none",
                transition: "left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)"
              }
            }
          ),
          methods.map((m, i) => {
            const isActive = activeKey === m.key;
            const isHovered = hoveredIdx === i;
            const iconColor = isActive ? "#fff" : isHovered ? ACTIVE_COLOR : "#9CA3AF";
            const textColor = isActive ? "#fff" : isHovered ? ACTIVE_COLOR : "#6B7280";
            const iconNode = resolveIcon(m, iconColor);
            const button = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
              import_material7.Box,
              {
                ref: (el) => {
                  buttonRefs.current[i] = el;
                },
                onClick: () => handleSelect(m.key),
                onMouseEnter: () => setHoveredIdx(i),
                onMouseLeave: () => setHoveredIdx(null),
                sx: {
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: showIcon && showText ? "8px" : 0,
                  flex: fullWidth ? 1 : void 0,
                  width: fullWidth ? "auto" : buttonWidth || "auto",
                  minWidth: buttonWidth ? void 0 : variant === "icon" ? 48 : 80,
                  px: showText ? 3 : 2,
                  height: "100%",
                  borderRadius: "6px",
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.5 : 1,
                  bgcolor: !isActive && isHovered ? "rgba(0,0,0,0.04)" : "transparent",
                  transition: "background-color 0.15s ease",
                  whiteSpace: "nowrap"
                },
                children: [
                  iconNode && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    import_material7.Box,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "transform 0.15s ease",
                        transform: isActive ? "scale(1.08)" : "scale(1)"
                      },
                      children: iconNode
                    }
                  ),
                  showText && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    import_material7.Typography,
                    {
                      component: "span",
                      sx: {
                        fontSize: 13,
                        fontWeight: isActive ? 500 : 400,
                        color: textColor,
                        lineHeight: 1,
                        transition: "color 0.15s ease"
                      },
                      children: m.label
                    }
                  )
                ]
              },
              m.key
            );
            return variant === "icon" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material7.Tooltip, { title: m.label, placement: "top", arrow: true, children: button }, m.key) : button;
          })
        ]
      }
    ),
    activeMethod && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      DynamicFields,
      {
        method: activeMethod,
        values: value?.fields,
        onChange: handleFieldChange,
        disabled,
        bgColor
      }
    )
  ] });
};

// src/components/ChipInput/ChipInput.tsx
var import_react8 = require("react");
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_Typography3 = __toESM(require("@mui/material/Typography"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_InputAdornment = __toESM(require("@mui/material/InputAdornment"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Chip = ({
  label,
  onDelete,
  disabled
}) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  import_Box2.default,
  {
    sx: {
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      bgcolor: "#E8EDFF",
      border: "1px solid #D4DEFF",
      color: "#313952",
      fontSize: "13px",
      fontWeight: 400,
      px: 1.2,
      py: 0.5,
      borderRadius: "10px",
      userSelect: "none"
    },
    children: [
      label,
      !disabled && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_IconButton.default,
        {
          onClick: onDelete,
          size: "small",
          sx: {
            p: "2px",
            ml: 0.3
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "svg",
            {
              width: "8",
              height: "8",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "path",
                {
                  d: "M13 1L1 13M1 1L13 13",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        }
      )
    ]
  }
);
var ChipInput = ({
  label,
  chips = [],
  onChipsChange,
  bgColor,
  disabled = false,
  error = false,
  helperText,
  fullWidth = false,
  sx
}) => {
  const [inputValue, setInputValue] = (0, import_react8.useState)("");
  const [duplicateError, setDuplicateError] = (0, import_react8.useState)(false);
  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const isDuplicate = chips.some(
      (c) => c.toLowerCase() === trimmed.toLowerCase()
    );
    if (isDuplicate) {
      setDuplicateError(true);
      return;
    }
    onChipsChange?.([...chips, trimmed]);
    setInputValue("");
    setDuplicateError(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (duplicateError) setDuplicateError(false);
  };
  const handleDelete = (chip) => {
    onChipsChange?.(chips.filter((c) => c !== chip));
    if (duplicateError) setDuplicateError(false);
  };
  const showError = error || duplicateError;
  const displayHelperText = duplicateError ? "This entry already exists" : helperText;
  const passErrorToTextField = showError ? displayHelperText || true : false;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_Box2.default, { sx: { width: fullWidth ? "100%" : void 0, ...sx }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      TextField,
      {
        fullWidth,
        label,
        value: inputValue,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        disabled,
        error: passErrorToTextField,
        bgColor,
        inputProps: { "aria-label": label },
        InputProps: {
          endAdornment: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_InputAdornment.default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_IconButton.default,
            {
              onClick: handleAdd,
              size: "small",
              disabled: disabled || !inputValue.trim(),
              sx: {
                mr: -0.5,
                color: "#6B7280",
                "&:hover": {
                  color: "#374151",
                  backgroundColor: "transparent"
                }
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "path",
                {
                  d: "M12 5V19M5 12H19",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ) })
            }
          ) })
        }
      }
    ),
    displayHelperText && !showError && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_Typography3.default,
      {
        sx: {
          fontSize: "11px",
          mt: 0.5,
          fontWeight: 500,
          mx: "1px",
          color: "text.secondary"
        },
        children: displayHelperText
      }
    ),
    chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_Box2.default, { sx: { display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }, children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Chip,
      {
        label: chip,
        onDelete: () => handleDelete(chip),
        disabled
      },
      chip
    )) })
  ] });
};

// src/components/DataTable/DataTable.tsx
var import_react9 = __toESM(require("react"));
var import_material8 = require("@mui/material");
var import_jsx_runtime10 = require("react/jsx-runtime");
var DataTable = import_react9.default.forwardRef(
  ({ columns, data, isLoading = false, emptyMessage = "No data available" }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableContainer, { ref, component: import_material8.Paper, variant: "outlined", sx: { overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material8.Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { sx: { backgroundColor: "background.default" }, children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { align: col.align || "left", sx: { fontWeight: 600 }, children: col.header }, col.key)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { colSpan: columns.length, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.CircularProgress, { size: 32 }) }) }) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { colSpan: columns.length, align: "center", sx: { py: 6 }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.Typography, { variant: "body2", color: "text.secondary", children: emptyMessage }) }) }) : data.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableRow, { hover: true, sx: { transition: "background-color 0.2s" }, children: columns.map((col) => {
        const val = row[col.key];
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.TableCell, { align: col.align || "left", children: col.render ? col.render(row) : val }, col.key);
      }) }, row.id || idx)) })
    ] }) });
  }
);
DataTable.displayName = "DataTable";

// src/components/Modal/Modal.tsx
var import_react10 = __toESM(require("react"));
var import_material9 = require("@mui/material");
var import_jsx_runtime11 = require("react/jsx-runtime");
var CloseIcon = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
var Modal = import_react10.default.forwardRef(
  ({ open, title, onClose, actions, children, fullWidth = true, maxWidth = "sm", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_material9.Dialog,
      {
        ref,
        open,
        onClose,
        fullWidth,
        maxWidth,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_material9.Box, { display: "flex", alignItems: "center", justifyContent: "space-between", pr: 1, children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.DialogTitle, { sx: { m: 0, p: 2, flexGrow: 1 }, children: title }),
            onClose && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_material9.IconButton,
              {
                "aria-label": "close",
                onClick: onClose,
                sx: {
                  color: (theme) => theme.palette.grey[500]
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CloseIcon, {})
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.DialogContent, { sx: { p: 3, pt: title ? 1 : 3 }, children }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.DialogActions, { sx: { p: 2 }, children: actions })
        ]
      }
    );
  }
);
Modal.displayName = "Modal";

// src/components/NumberField/NumberField.tsx
var import_material10 = require("@mui/material");
var import_Box3 = __toESM(require("@mui/material/Box"));
var import_IconButton2 = __toESM(require("@mui/material/IconButton"));
var import_styles3 = require("@mui/material/styles");
var import_TextField8 = __toESM(require("@mui/material/TextField"));
var import_react11 = require("react");
var import_icons_material4 = require("@mui/icons-material");
var import_jsx_runtime12 = require("react/jsx-runtime");
var StyledTextField2 = (0, import_styles3.styled)(
  ({
    bgColor = "transparent",
    hasLabel,
    hasValue,
    showButton,
    InputProps,
    ...props
  }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_TextField8.default,
    {
      variant: "filled",
      fullWidth: true,
      InputProps: {
        disableUnderline: true,
        ...InputProps,
        sx: {
          overflow: "visible",
          borderRadius: showButton ? "10px 0 0 10px !important" : "10px !important",
          backgroundColor: bgColor,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRight: showButton ? "none" : (theme) => `1px solid ${theme.palette.divider}`,
          height: "46px",
          transition: (theme) => theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow"
          ]),
          "&:hover": { backgroundColor: bgColor },
          "&:before, &:after": { display: "none" },
          "&.Mui-focused": {
            backgroundColor: bgColor,
            borderColor: (theme) => theme.palette.primary.main
          },
          ...InputProps?.sx || {}
        }
      },
      ...props
    }
  )
)(({ theme, bgColor, hasLabel, hasValue, showButton }) => ({
  "& .VortexUIInputLabel-root": {
    transform: "translate(10px, 13px) scale(1)",
    fontSize: "13px",
    color: theme.palette.text.primary,
    fontWeight: 400,
    transition: "transform 0.2s ease",
    "&.VortexUIInputLabel-shrink": {
      transform: "translate(10px, 6px) scale(0.75)",
      lineHeight: 1
    }
  },
  "& .VortexUIFilledInput-input": {
    padding: "0 8px",
    fontSize: "14px",
    color: theme.palette.text.primary,
    fontWeight: 400,
    backgroundColor: "transparent",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center"
  },
  "& .VortexUIInputLabel-shrink ~ .VortexUIFilledInput-root .VortexUIFilledInput-input": {
    padding: "24px 10px 0 10px"
  },
  "& label.Mui-focused": {
    color: theme.palette.text.secondary
  }
}));
var ArrowContainer = (0, import_styles3.styled)(import_Box3.default, {
  shouldForwardProp: (prop) => prop !== "bgColor"
})(({ theme, bgColor = "transparent" }) => ({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.palette.divider}`,
  borderLeft: `1px solid ${theme.palette.divider}`,
  borderRadius: "0 10px 10px 0",
  overflow: "hidden",
  backgroundColor: bgColor,
  width: "32px",
  height: "46px",
  transition: "border-color 300ms ease"
}));
var ArrowButton = (0, import_styles3.styled)(import_IconButton2.default)(({ theme }) => ({
  borderRadius: 0,
  padding: "2px",
  height: "50%",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  transition: "background-color 100ms ease",
  "&:hover": {
    backgroundColor: "transparent"
  },
  "&:active": {
    backgroundColor: theme.palette.divider
  },
  "&.Mui-disabled": {
    opacity: 0.4
  },
  "& .VortexUISvgIcon-root": {
    fontSize: "16px"
  }
}));
function NumberField({
  label = "Number Field",
  value: externalValue,
  onChange,
  onBlur,
  disabled = false,
  bgColor = "transparent",
  showButton = true,
  allowDecimal = false,
  allowNegative = false,
  min = allowNegative ? -Infinity : 0,
  max = Infinity,
  step = 1,
  decimalPlaces = 2,
  sx,
  prefix: prefix2,
  unit,
  ...props
}) {
  const [internalValue, setInternalValue] = (0, import_react11.useState)(
    externalValue !== void 0 ? String(externalValue) : ""
  );
  const value = externalValue !== void 0 ? String(externalValue) : internalValue;
  const isIntermediate = ["", "-", ".", "-."].includes(value);
  const numericValue = isIntermediate ? 0 : parseFloat(value);
  const valueRef = (0, import_react11.useRef)(numericValue);
  valueRef.current = numericValue;
  const setValue = (val) => {
    setInternalValue(val);
    onChange?.({ target: { value: val } });
  };
  const clamp = (num) => {
    let n = num;
    if (n < min) n = min;
    if (n > max) n = max;
    return n;
  };
  const roundStep = (num) => {
    if (!allowDecimal) return Math.round(num);
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  };
  const getPattern = () => {
    if (allowNegative && allowDecimal) return /^-?\d*\.?\d*$/;
    if (allowNegative && !allowDecimal) return /^-?\d*$/;
    if (!allowNegative && allowDecimal) return /^\d*\.?\d*$/;
    return /^\d*$/;
  };
  const intermediateStates = allowNegative ? allowDecimal ? ["-", ".", "-."] : ["-"] : allowDecimal ? ["."] : [];
  const handleChange = (e) => {
    const raw = e.target.value;
    if (raw === "") {
      setValue("");
      return;
    }
    if (!getPattern().test(raw)) return;
    if (intermediateStates.includes(raw)) {
      setValue(raw);
      return;
    }
    const parsed = parseFloat(raw);
    if (isNaN(parsed)) return;
    setValue(raw);
  };
  const handleBlur = (e) => {
    if (isIntermediate) {
      setValue("");
      onBlur?.(e);
      return;
    }
    let parsed = parseFloat(value);
    if (isNaN(parsed)) parsed = 0;
    parsed = clamp(parsed);
    setValue(allowDecimal ? String(parsed) : String(Math.round(parsed)));
    onBlur?.(e);
  };
  const increment = () => {
    const next2 = clamp(roundStep(valueRef.current + step));
    setValue(String(next2));
  };
  const decrement = () => {
    const next2 = clamp(roundStep(valueRef.current - step));
    setValue(String(next2));
  };
  const repeatTimeoutRef = (0, import_react11.useRef)(null);
  const repeatIntervalRef = (0, import_react11.useRef)(null);
  const stopRepeat = () => {
    if (repeatTimeoutRef.current) {
      clearTimeout(repeatTimeoutRef.current);
      repeatTimeoutRef.current = null;
    }
    if (repeatIntervalRef.current) {
      clearInterval(repeatIntervalRef.current);
      repeatIntervalRef.current = null;
    }
  };
  const startRepeat = (action) => {
    action();
    repeatTimeoutRef.current = setTimeout(() => {
      repeatIntervalRef.current = setInterval(action, 100);
    }, 400);
  };
  (0, import_react11.useEffect)(() => stopRepeat, []);
  const canIncrement = !disabled && numericValue < max;
  const canDecrement = !disabled && numericValue > min;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_Box3.default,
    {
      display: "flex",
      alignItems: "stretch",
      width: "fit-content",
      sx: {
        width: 1,
        "&:focus-within .arrow-container": {
          borderTopColor: (theme) => theme.palette.primary.main,
          borderRightColor: (theme) => theme.palette.primary.main,
          borderBottomColor: (theme) => theme.palette.primary.main
        },
        ...sx
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          StyledTextField2,
          {
            label,
            value,
            onChange: handleChange,
            onBlur: handleBlur,
            hasLabel: !!label,
            hasValue: value !== "",
            disabled,
            bgColor,
            showButton,
            inputProps: {
              inputMode: allowDecimal ? "decimal" : "numeric",
              pattern: allowNegative ? allowDecimal ? "-?[0-9]*\\.?[0-9]*" : "-?[0-9]*" : allowDecimal ? "[0-9]*\\.?[0-9]*" : "[0-9]*",
              min,
              max
            },
            InputProps: {
              ...prefix2 && {
                startAdornment: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.InputAdornment, { position: "start", children: prefix2 })
              },
              ...unit && {
                endAdornment: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.InputAdornment, { position: "end", sx: { mr: 1, ml: 0 }, children: unit })
              }
            },
            ...props
          }
        ),
        showButton && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(ArrowContainer, { className: "arrow-container", bgColor, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            ArrowButton,
            {
              onMouseDown: (e) => {
                e.preventDefault();
                if (canIncrement) startRepeat(increment);
              },
              onMouseUp: stopRepeat,
              onMouseLeave: stopRepeat,
              onTouchStart: (e) => {
                e.preventDefault();
                if (canIncrement) startRepeat(increment);
              },
              onTouchEnd: stopRepeat,
              disableRipple: true,
              size: "small",
              disabled: !canIncrement,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_icons_material4.ExpandLess, { color: "secondary" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.Divider, { orientation: "horizontal", flexItem: true, sx: { marginX: "4px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            ArrowButton,
            {
              onMouseDown: (e) => {
                e.preventDefault();
                if (canDecrement) startRepeat(decrement);
              },
              onMouseUp: stopRepeat,
              onMouseLeave: stopRepeat,
              onTouchStart: (e) => {
                e.preventDefault();
                if (canDecrement) startRepeat(decrement);
              },
              onTouchEnd: stopRepeat,
              disableRipple: true,
              size: "small",
              disabled: !canDecrement,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_icons_material4.ExpandMore, { color: "secondary" })
            }
          )
        ] })
      ]
    }
  );
}

// src/components/TextAreas/Textarea.tsx
var import_react12 = __toESM(require("react"));
var import_Box4 = __toESM(require("@mui/material/Box"));
var import_styles4 = require("@mui/material/styles");
var import_Typography4 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Wrapper = (0, import_styles4.styled)(import_Box4.default, {
  shouldForwardProp: (p) => p !== "bgColor" && p !== "isError" && p !== "isDisabled"
})(
  ({ theme, bgColor = "#FAFBFF", isError, isDisabled }) => ({
    width: "100%",
    borderRadius: "10px",
    backgroundColor: isDisabled ? theme.palette.action.disabledBackground : bgColor,
    border: `1px solid ${isError ? theme.palette.error.main : "#D8D9DC"}`,
    padding: "8px 12px",
    boxSizing: "border-box",
    cursor: isDisabled ? "not-allowed" : "text",
    transition: "border-color 0.2s, box-shadow 0.2s, background-color 0.2s",
    "&:focus-within": {
      backgroundColor: "#fff",
      borderColor: isError ? theme.palette.error.main : theme.palette.primary.main
    },
    "&:hover:not(:focus-within)": {
      backgroundColor: isDisabled ? void 0 : "#fff"
    }
  })
);
var StyledTextarea = (0, import_styles4.styled)("textarea", {
  shouldForwardProp: (p) => p !== "isExpandable"
})(({ theme, isExpandable }) => ({
  width: "100%",
  border: "none",
  outline: "none",
  resize: isExpandable ? "vertical" : "none",
  overflow: isExpandable ? "hidden" : void 0,
  backgroundColor: "transparent",
  fontSize: "14px",
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  lineHeight: isExpandable ? "21px" : 1.5,
  padding: 0,
  marginTop: "2px",
  display: "block",
  boxSizing: "border-box",
  "&::placeholder": {
    color: theme.palette.text.disabled
  },
  "&:disabled": {
    cursor: "not-allowed",
    color: theme.palette.text.disabled,
    resize: "none"
  }
}));
var Textarea = import_react12.default.forwardRef(
  ({
    variant = "default",
    label,
    value,
    onChange,
    maxLength,
    rows = 3,
    minRows,
    bgColor = "#FAFBFF",
    error,
    disabled,
    placeholder,
    fullWidth,
    inputProps,
    ...rest
  }, ref) => {
    const isExpandable = variant === "expandable";
    const isMinLength = variant === "minLength";
    const internalRef = (0, import_react12.useRef)(null);
    const textareaRef = ref || internalRef;
    const [internalValue, setInternalValue] = import_react12.default.useState(
      rest.defaultValue !== void 0 ? String(rest.defaultValue) : ""
    );
    const currentValue = value !== void 0 ? String(value) : internalValue;
    const charCount = currentValue.length;
    const showCounter = isMinLength || maxLength != null;
    const minLengthError = isMinLength && charCount > 0 && maxLength != null && charCount < maxLength;
    const resolvedError = isMinLength ? minLengthError || error : error;
    const resolvedLabel = isMinLength ? `${label} (Min ${maxLength} chars)` : label;
    const resolvedRows = isMinLength && rows === 3 ? 4 : rows;
    const effectiveMinRows = minRows ?? resolvedRows;
    const LINE_HEIGHT = 21;
    const resize = (el) => {
      if (!el) return;
      const minH = LINE_HEIGHT * effectiveMinRows;
      el.style.height = "0px";
      el.style.height = `${Math.max(el.scrollHeight, minH)}px`;
    };
    (0, import_react12.useLayoutEffect)(() => {
      if (isExpandable) {
        resize(textareaRef.current);
      }
    }, [currentValue, effectiveMinRows, isExpandable]);
    const handleChange = (e) => {
      if (value === void 0) {
        setInternalValue(e.target.value);
      }
      if (isExpandable) {
        resize(e.target);
      }
      onChange?.(e);
    };
    const counterText = isMinLength ? `${charCount}/${maxLength}` : `${charCount}/${maxLength}`;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_Box4.default, { sx: { width: fullWidth ? "100%" : void 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        Wrapper,
        {
          bgColor,
          isError: !!resolvedError,
          isDisabled: !!disabled,
          children: [
            (resolvedLabel || showCounter) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              import_Box4.default,
              {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  resolvedLabel && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    import_Typography4.default,
                    {
                      component: "span",
                      sx: {
                        fontSize: "11px",
                        color: resolvedError ? "error.main" : "text.secondary",
                        fontWeight: 400,
                        lineHeight: 1,
                        userSelect: "none"
                      },
                      children: resolvedLabel
                    }
                  ),
                  showCounter && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    import_Typography4.default,
                    {
                      component: "span",
                      sx: {
                        fontSize: "12px",
                        color: resolvedError ? "error.main" : "text.secondary",
                        lineHeight: 1,
                        ml: "auto",
                        userSelect: "none",
                        fontWeight: 400
                      },
                      children: counterText
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              StyledTextarea,
              {
                ref: textareaRef,
                isExpandable,
                value: currentValue,
                onChange: handleChange,
                rows: isExpandable ? effectiveMinRows : resolvedRows,
                maxLength: isMinLength ? void 0 : maxLength,
                disabled,
                placeholder,
                ...inputProps,
                ...rest
              }
            )
          ]
        }
      ),
      resolvedError && typeof resolvedError === "string" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_Typography4.default,
        {
          sx: {
            fontSize: "12px",
            mt: 0.5,
            mx: "14px",
            color: "error.main"
          },
          children: resolvedError
        }
      ),
      isMinLength && minLengthError && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_Typography4.default,
        {
          sx: {
            fontSize: "12px",
            mt: 0.5,
            mx: "14px",
            color: "error.main"
          },
          children: `Minimum ${maxLength} characters required.`
        }
      )
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/providers/VortexUIProvider.tsx
var import_react13 = require("react");
var import_styles5 = require("@mui/material/styles");
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"));
var import_react14 = require("@emotion/react");

// ../../node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ (function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
})();

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}

// ../../node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache2 = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache2.has(arg)) {
      return cache2.get(arg);
    }
    var ret = func(arg);
    cache2.set(arg, ret);
    return ret;
  };
};

// ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0) cache2[arg] = fn(arg);
    return cache2[arg];
  };
}

// ../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.esm.js
var isBrowser = typeof document !== "undefined";
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      // fallthrough
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        // (s)tretch
        case 115:
          return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    // position: sticky
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        // (inline-)?fl(e)x
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            // :placeholder
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var getServerStylisCache = isBrowser ? void 0 : weakMemoize(function() {
  return memoize(function() {
    return {};
  });
});
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (isBrowser && key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (!getServerStylisCache) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];
    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis2(styles) {
      return serialize(compile(styles), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules3 = function getRules4(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === void 0) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert2(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules3(selector, serialized);
      if (cache2.compat === void 0) {
        if (shouldCache) {
          cache2.inserted[name] = true;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache2.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};

// src/theme/theme.ts
var import_material11 = require("@mui/material");

// src/theme/palette.ts
var colors = {
  primary: {
    light: {
      main: "#4772FF",
      light: "#7496FF",
      dark: "#2F50C2",
      contrastText: "#FFFFFF",
      hover: "#3D63E6",
      disabled: "#A8B9F5",
      disabledBackground: "#E8EDFF"
    },
    dark: {
      main: "#4772FF",
      light: "#688CFF",
      dark: "#3352CC",
      contrastText: "#FFFFFF",
      hover: "#5782FF",
      disabled: "#2A3C73",
      disabledBackground: "#1A2642"
    }
  },
  secondary: {
    light: {
      main: "#0088ab",
      light: "#22d3ee",
      dark: "#00647D",
      contrastText: "#ffffff",
      hover: "#0596a7",
      disabled: "#40e0d0",
      disabledBackground: "#ccfbf1"
    },
    dark: {
      main: "#0088ab",
      light: "#33A1C2",
      dark: "#00556B",
      contrastText: "#ffffff",
      hover: "#1A9AB8",
      disabled: "#205C6B",
      disabledBackground: "#0D2B33"
    }
  },
  error: {
    light: {
      main: "#FF4747",
      light: "#FF7373",
      dark: "#E63A3A",
      contrastText: "#FFFFFF",
      hover: "#F23D3D",
      disabled: "#FFBABA",
      disabledBackground: "#FFF0F0"
    },
    dark: {
      main: "#FF4747",
      light: "#FF6666",
      dark: "#CC3939",
      contrastText: "#FFFFFF",
      hover: "#FF5C5C",
      disabled: "#5C2929",
      disabledBackground: "#2E1515"
    }
  },
  warning: {
    light: {
      main: "#FFA347",
      light: "#FFBC70",
      dark: "#E68F3F",
      contrastText: "#1A1A1A",
      hover: "#F2943D",
      disabled: "#FFDDBA",
      disabledBackground: "#FFF6ED"
    },
    dark: {
      main: "#FFA347",
      light: "#FFB366",
      dark: "#CC8239",
      contrastText: "#1A1A1A",
      hover: "#FFAD5C",
      disabled: "#5C3A1A",
      disabledBackground: "#2E1D0D"
    }
  },
  success: {
    light: {
      main: "#47FFA3",
      light: "#70FFB8",
      dark: "#3FE691",
      contrastText: "#06351D",
      hover: "#3DF294",
      disabled: "#BAFFDA",
      disabledBackground: "#EDFFF5"
    },
    dark: {
      main: "#47FFA3",
      light: "#66FFB3",
      dark: "#39CC82",
      contrastText: "#06351D",
      hover: "#5CFFAD",
      disabled: "#1A5C3A",
      disabledBackground: "#0D2E1D"
    }
  },
  info: {
    light: {
      main: "#47C2FF",
      light: "#70CEFF",
      dark: "#3FADE6",
      contrastText: "#06283A",
      hover: "#3DB3F2",
      disabled: "#BAE8FF",
      disabledBackground: "#EDF8FF"
    },
    dark: {
      main: "#47C2FF",
      light: "#66CBFF",
      dark: "#399BCC",
      contrastText: "#06283A",
      hover: "#5CCBFF",
      disabled: "#1A465C",
      disabledBackground: "#0D232E"
    }
  },
  background: {
    light: {
      default: "#f8fafc",
      paper: "#ffffff"
    },
    dark: {
      default: "#1c263c",
      paper: "#1e293b"
    }
  },
  text: {
    light: {
      primary: "#1c263c",
      secondary: "#475569",
      disabled: "#94a3b8"
    },
    dark: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      disabled: "#64748b"
    }
  },
  divider: {
    light: "#e2e8f0",
    dark: "#334155"
  }
};
var getPalette = (mode) => ({
  mode,
  primary: colors.primary[mode],
  secondary: colors.secondary[mode],
  error: colors.error[mode],
  warning: colors.warning[mode],
  success: colors.success[mode],
  info: colors.info[mode],
  background: colors.background[mode],
  text: colors.text[mode],
  divider: colors.divider[mode]
});

// src/theme/typography.ts
var typography = {
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif"
  ].join(","),
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em"
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em"
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.3
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.4
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none"
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.4
  }
};

// src/theme/components.ts
var components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        padding: "8px 16px",
        transition: "all 0.2s ease-in-out",
        fontWeight: 600,
        textTransform: "none"
      },
      containedPrimary: {
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.25)"
        }
      },
      containedSecondary: {
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 4px 12px rgba(6, 182, 212, 0.25)"
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "8px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.light
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px"
        }
      })
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)",
        border: "1px solid #e2e8f0"
      }
    }
  }
};

// src/theme/theme.ts
var getTheme = (mode) => (0, import_material11.createTheme)({
  palette: getPalette(mode),
  typography,
  components,
  shape: {
    borderRadius: 8
  }
});

// src/providers/VortexUIProvider.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var ColorModeContext = (0, import_react13.createContext)({
  toggleColorMode: () => {
  },
  mode: "light"
});
var useColorMode = () => (0, import_react13.useContext)(ColorModeContext);
var cache = createCache({
  key: "vortexui",
  prepend: true
});
function VortexUIProvider({ children, disableCustomCache = false, initialMode = "light" }) {
  const prefersDarkMode = (0, import_useMediaQuery.default)("(prefers-color-scheme: dark)");
  const [mode, setMode] = (0, import_react13.useState)(initialMode);
  (0, import_react13.useEffect)(() => {
    const hasCookie = document.cookie.includes("vortex-ui-theme-mode=");
    if (!hasCookie && prefersDarkMode) {
      setMode("dark");
      document.cookie = `vortex-ui-theme-mode=dark; path=/; max-age=31536000`;
    }
  }, [prefersDarkMode]);
  const colorMode = (0, import_react13.useMemo)(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          document.cookie = `vortex-ui-theme-mode=${newMode}; path=/; max-age=31536000`;
          localStorage.setItem("vortex-ui-theme-mode", newMode);
          return newMode;
        });
      },
      mode
    }),
    [mode]
  );
  const theme = (0, import_react13.useMemo)(() => getTheme(mode), [mode]);
  const content = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ColorModeContext.Provider, { value: colorMode, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_styles5.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_CssBaseline.default, {}),
    children
  ] }) });
  if (disableCustomCache) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: content });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react14.CacheProvider, { value: cache, children: content });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AutoPopulate,
  AutoPopulateItem,
  Button,
  ButtonGroup,
  ChipInput,
  ColorModeContext,
  DataTable,
  DefaultSelect,
  Modal,
  NumberField,
  Select,
  TextField,
  Textarea,
  VortexUIProvider,
  useColorMode,
  vortexTheme
});
//# sourceMappingURL=index.js.map