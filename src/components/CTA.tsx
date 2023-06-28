import { Box, Button, Text } from "@mantine/core";

const CTA: React.FC<{ background: string, buttonColor: string, text: string }> = ({ background, buttonColor, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // background: "#FBFBFD",
        background: background,
        color: text,
      }}
    >
      <Text size={24} fw={700} mt={120} mb={40}>
        Ready to get started?
      </Text>
      <Text mb={25} ta="center" sx={{ maxWidth: "420px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button
        mb={120}
        h={60}
        w={200}
        sx={{
          borderRadius: 10,
          fontSize: 18,
          // background: "#301F55",
          background: buttonColor,
          padding: 20,
        }}
      >
        Start free trial
      </Button>
    </Box>
  );
};

export default CTA;
