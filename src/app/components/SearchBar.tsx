import React from "react";
import { Box, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "50px", // Oq panel uchun yumaloqlik
        backgroundColor: "#fff", // Oq fon
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Yengil soya
        width: "370px", // Panel kengligi
        height: "30px", // Oq panel balandligi
      }}
    >
      {/* Kiritish maydoni */}
      <InputBase
        placeholder="Type here"
        sx={{
          flex: 1, // Kiritish maydoni kengayadi
          fontSize: "16px", // Shrift kattaligi
          padding: "0 20px", // Ichki bo‘sh joy
          color: "#333", // Matn rangi
          border: "none", // Chegarasiz maydon
          outline: "none", // Fokus chizig'ini olib tashlash
        }}
      />

      {/* Qidirish tugmasi */}
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px", // Matn va ikon orasidagi bo‘shliq
          backgroundColor: "#333", // Qora tugma foni
          color: "#F3C295", // Oltin matn va ikon rang
          borderRadius: "50px", // Tugmani to‘liq yumaloqlash
          padding: "15px 15px", // Ichki bo'sh joy (kattaroq tugma uchun)
          fontWeight: "bold", // Qalin shrift
          textTransform: "uppercase", // Katta harflar bilan matn
          height: "34px", // Tugma balandligi (oq paneldan kattaroq)
          marginRight: "-10px", // Tugmani oq paneldan tashqariga chiqarish
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Tugma soyasi
          "&:hover": {
            backgroundColor: "#555", // Hoverda ochroq qora rang
          },
        }}
      >
        SEARCH
        <SearchIcon sx={{ fontSize: "24px" }} />
      </Button>
    </Box>
  );
}


