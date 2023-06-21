import { Global } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function GlobalStyles() {
  const tablet = useMediaQuery("(max-width: 768px) and (min-width: 431px)");
  const largePhone = useMediaQuery("(max-width: 430px) and (min-width: 376px)");
  return (
    <Global
      styles={{
        "*": {
          fontStretch: "extra-expanded",
        },
        body: {
          backgroundColor: "#F2F2F2",
          overflowX: "hidden",
        },
        ".mantine-Modal-close": {
          backgroundColor: "#0BD0BB",
          borderRadius: "20px",
          color: "#fff",
          boxShadow: "1px 3px 3px rgba(0, 0, 0, 0.25)",
        },
        ".mantine-Modal-close:hover": {
          backgroundColor: "#0BD0BB",
          opacity: 0.75,
        },
        ".mantine-Modal-close svg": {
          width: "18px",
          height: "auto",
        },
        ".mantine-Textarea-input:focus": {
          borderColor: "#0BD0BB",
        },
        ".mantine-TextInput-input:focus": {
          borderColor: "#0BD0BB",
        },
        ".mantine-Autocomplete-input:focus": {
          borderColor: "#0BD0BB",
        },
        ".list-link": {
          textDecoration: "none",
        },
        ".list-link:hover": {
          textDecoration: "underline",
        },
        ".mantine-List-itemWrapper span": {
          fontStretch: "100%",
          textTransform: "lowercase",
          fontWeight: 340,
        },
        // Hide the default mapbox logo when in list view
        ".mapboxgl-ctrl-bottom-left": {
          zIndex: 0,
        },
        ".mapboxgl-ctrl-bottom-right": {
          zIndex: 0,
        },

        ".button-glow-shadow": {
          position: "absolute",
          top: -5,
          height: "45px",
          width: "155px",
          // backgroundImage: "radial-gradient( #2EF4DF , #DED35D 70%)",
          borderRadius: "8px",
          background:
            "linear-gradient(90deg, rgb(212, 85, 145), rgb(250, 174, 63), rgb(70, 207, 217), rgb(107, 99, 233), rgb(212, 85, 145))",
          zIndex: -1,
          filter: "blur(5px)",
          animation: "glow 20s, fade-in 0.3s, alternate infinite",
          backgroundSize: "300%",
        },
        ".button-glow-shadow-none": {
          animation: "fade-out 0.3s",
          opacity: 0,
          position: "absolute",
          top: -5,
          height: "45px",
          width: "155px",
          // backgroundImage: "radial-gradient( #2EF4DF , #DED35D 70%)",
          borderRadius: "8px",
          background:
            "linear-gradient(90deg, rgb(212, 85, 145), rgb(250, 174, 63), rgb(70, 207, 217), rgb(107, 99, 233), rgb(212, 85, 145))",
          zIndex: -1,
          filter: "blur(5px)",
          backgroundSize: "300%",
        },
        "@keyframes fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "@keyframes fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "@keyframes glow": {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "300% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        ".frills": {
          position: "absolute",
          background: "#125485",
          width: "0px",
          borderRadius: "8px",
          height: "8px",
        },
        ".right-frills": {
          right: "80px",
        },
        ".right-frills-1": {
          transform: "rotate(34deg)",
          top: "40px",
          animation:
            "move-right .28s ease-out, move-down .28s ease-out, width-to-zero .28s ease-out ",
        },
        ".right-frills-2": {
          top: "15px",
          animation: "move-right .28s ease-out, width-to-zero .28s ease-out ",
        },
        ".right-frills-3": {
          transform: "rotate(-34deg)",
          top: "-10px",
          animation:
            "move-right .28s ease-out, move-up .28s ease-out, width-to-zero .28s ease-out ",
        },
        ".left-frills": {
          left: "80px",
        },
        ".left-frills-1": {
          transform: "rotate(-34deg)",
          top: "40px",
          animation:
            "move-left .28s ease-out, move-down .28s ease-out, width-to-zero .28s ease-out ",
        },
        ".left-frills-2": {
          top: "15px",
          animation: "move-left .28s ease-out, width-to-zero .28s ease-out ",
        },
        ".left-frills-3": {
          transform: "rotate(34deg)",
          top: "-10px",
          animation:
            "move-left .28s ease-out, move-up .28s ease-out, width-to-zero .28s ease-out ",
        },
        "@keyframes move-left": {
          "0%": {
            transform: "",
          },
          // "65%": {
          //   transform: "translate(-80px, 10px)"
          // },
          "100%": {
            transform: "translateX(-50px)",
          },
        },
        "@keyframes move-right": {
          "0%": {
            transform: "",
          },
          // "65%": {
          //   transform: "translateX(80px)"
          // },
          "100%": {
            transform: " translateX(50px)",
          },
        },
        "@keyframes width-to-zero": {
          "0%": {
            width: "30px",
          },
          // "60%": {
          //   width: "15px",
          //   opacity: 1
          // },
          "90%": {
            opacity: 1,
          },
          "100%": {
            width: "8px",
            opacity: 0,
          },
        },
        "@keyframes move-up": {
          "0%": { top: "-10px" },
          "100%": {
            top: "-50px",
          },
        },
        "@keyframes move-down": {
          "0%": { top: "40px" },
          "100%": {
            top: "70px",
          },
        },
        ".list-container-fade-back": {
          animation: "fade-back 0.3s",
          opacity: 0,
          zIndex: -1,
          position: "relative",
        },
        ".list-container-fade-front": {
          animation: "fade-front 0.3s",
          blur: "5px",
        },
        "@keyframes fade-back": {
          "0%": { opacity: 1, userSelect: "auto" },
          "100%": { opacity: 0, userSelect: "none" },
        },
        "@keyframes fade-front": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "div.mapboxgl-popup.list-map-popup > div.mapboxgl-popup-content": {
          padding: "0px",
          borderRadius: "8px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
          width: tablet ? "280px" : largePhone ? "340px" : "300px",
        },
      }}
    />
  );
}
