import { Box, CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={"24px"} />
    </Box>
  );
};
export default Loading;
