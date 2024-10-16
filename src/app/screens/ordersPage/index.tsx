import { useState, SyntheticEvent } from "react";
import { Box, Container, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PauseOrders from "./PausedOrders";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";
import Divider from "../../components";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="order tabs"
                  className="table_list"
                >
                  <Tab label="PAUSED ORDERS" value="1" />
                  <Tab label="PROCESS ORDERS" value="2" />
                  <Tab label="FINISHED ORDERS" value="3" />
                </Tabs>
              </Box>
            </Box>

            <TabPanel value="1">
              <PauseOrders />
              <PausedOrders />
            </TabPanel>
            <TabPanel value="2">
              <ProcessOrders />
            </TabPanel>
            <TabPanel value="3">
              <FinishedOrders />
            </TabPanel>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  src="/img/elbek.png"
                  className="order-user-avatar"
                  alt="User Avatar"
                />
                <div className="order-user-icon-box">
                  <img
                    src="/icons/user-badge.svg"
                    className="order-user-prof-img"
                    alt="User Badge"
                  />
                </div>
              </div>
              <span className="order-user-name">Justin</span>
              <span className="order-user-role">USER</span>
            </Box>

            <Divider height="1" width="332" bg="#A1A1A1" />


            <Box className="order-user-address">
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
                <p className={"spec-address-txt"}>Soul, South Korea</p>
              </div>
            </Box>
          </Box>

          <Box className="order-info-box">
            <div className={"card-input"}>
              <p className={"card-number"}>Card number: 5243 4090 2002 7495</p>
            </div>
            <Stack className={"card-half-box"}>
              <Box className={"card-half-input"}>
                <p className={"card-valid-period"}>07/24</p>
              </Box>
              <Box className={"card-half-input"}>
                <p className={"card-valid-period"}>CVV : 010</p>
              </Box>
            </Stack>
            <div className={"card-input"}>
              <p className={"card-number"}>Elbek Jumanazarov</p>
            </div>
            <Stack className={"cards-box"}>
              <Box>
                {" "}
                <img src={"/img/Western-union.svg"} alt="" />
              </Box>
              <Box>
                {" "}
                <img src={"/img/master-card.svg"} alt="" />
              </Box>
              <Box>
                {" "}
                <img src={"/img/Paypal.svg"} alt="" />
              </Box>
              <Box>
                {" "}
                <img src={"/img/visa-card.svg"} alt="" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}



















// import React, { useState, SyntheticEvent } from "react";
// import { Container, Stack, Box } from "@mui/material";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PausedOrders from "./PausedOrders";
// import ProcessOrders from "./ProcessOrders";
// import FinishedOrders from "./FinishedOrders";
// import "../../../css/order.css"; 
// import Divider from "../../components";

// export default function OrdersPage() {
//   const [value, setValue] = useState<string>("1"); 

//   const handleChange = (e: SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="order-page">
//       <Container className="order-container">
//         <Stack className="order-left">
//           <TabContext value={value}>
//             <Box className="order-nav-frame">
//               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                 <Tabs
//                   value={value}
//                   onChange={handleChange}
//                   aria-label="basic tabs example"
//                   className="table_list"
//                 >
//                   <Tab label="PAUSED ORDERS" value="1" />
//                   <Tab label="PROCESS ORDERS" value="2" />
//                   <Tab label="FINISHED ORDERS" value="3" />
//                 </Tabs>
//               </Box>
//             </Box>

//             <Stack className="order-main-content">
//               {value === "1" && <PausedOrders />}
//               {value === "2" && <ProcessOrders />}
//               {value === "3" && <FinishedOrders />}
//             </Stack>
//           </TabContext>
//         </Stack>

//         <Stack className="order-right">
//           <Box className="order-info-box">
//             <Box className="member-box">
//               <div className="order-user-img">
//                 <img
//                   src="/icons/default-user.svg"
//                   className="order-user-avatar"
//                   alt="User avatar"
//                 />
//                 <div className="order-user-icon-box">
//                   <img
//                     src="/icons/user-badge.svg"
//                     className="order-user-prof-img"
//                     alt="User badge"
//                   />
//                 </div>
//               </div>
//               <span className="order-user-name">Justin</span>
//               <span className="order-user-prof">User</span>
//             </Box>

//             {/* <Box className="liner" /> */}
//             <Divider height="1" width="332" bg="#A1A1A1" />


//             <Box className="order-user-address">
//               <div style={{ display: "flex" }}>
//                 <LocationOnIcon />
//                 <span>South Korea, Busan</span>
//               </div>
//             </Box>
//           </Box>

//           <Stack className="order-payment-info">
//             <input className="card-input"
//               type="text"
//               placeholder="Card number : 5243 4090 2002 7495"
//             />
//             <div className="card-details">
//               <input type="text" placeholder="07 / 24" />
//               <input type="text" placeholder="CVV : 010" />
//             </div>
//             <input type="text" placeholder="Justin Robertson" />
//             <div className="payment-icons">
//               <img src="/icons/visa.svg" alt="Visa" />
//               <img src="/icons/paypal.svg" alt="PayPal" />
//               <img src="/icons/mastercard.svg" alt="MasterCard" />
//             </div>
//           </Stack>
//         </Stack>
//       </Container>
//     </div>
//   );
// }
