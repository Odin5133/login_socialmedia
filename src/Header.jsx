import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "./Header.css";
import Logo from "./assets/Logo.png";

export default function Header(props) {
  return (
    <>
      <div className="headerx">
        <div className="headerx-left">
          <img src={Logo} className="headerx-left-logo" />
          <h6 className="headerx-left-name">HexFund</h6>
        </div>
        <div className="headerx-right">
          {" "}
          <motion.div whileTap={{ scale: 0.85 }}>
            <Icon
              icon={`iconamoon:mode-${props.isDark}-fill`}
              className={`headerx-right-${props.isDark}`}
              color={props.isDark === "dark" ? "white" : "yellow"}
              onClick={() => {
                props.changeTheme((k) => (k === "light" ? "dark" : "light"));
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
