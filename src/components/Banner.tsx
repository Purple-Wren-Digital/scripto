import { Box } from "@mantine/core";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        padding: "0px 20px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: process.env.NEXT_PUBLIC_BANNER_COLOR,
      }}
    >
      <p>
        {process.env.NEXT_PUBLIC_BANNER_TEXT}{" "}
        {process.env.NEXT_PUBLIC_BANNER_LINK && (
          <a href={process.env.NEXT_PUBLIC_BANNER_LINK}>
            {process.env.NEXT_PUBLIC_BANNER_LINK}
          </a>
        )}
      </p>
    </Box>
  );
};

export default Banner;
