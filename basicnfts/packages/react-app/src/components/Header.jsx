import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://joshwaynepatt.wixsite.com/verihat" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="verihat"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
