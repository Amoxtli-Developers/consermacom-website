// components/TestimonyCard.jsx
import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export function TestimonyCard({ title, text, author }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                px: isMobile ? 2 : 4,
                // make this wrapper a flex item that can grow
                display: "flex",
                height: "100%",
            }}
        >
            <Card
                elevation={3}
                sx={{
                    // fill the Box vertically
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: "none",
                }}
            >
                <CardContent
                    sx={{
                        position: "relative",
                        // allow content to grow and push footer down
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Title (e.g., institution) */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            mb: 1,
                            color: theme.palette.text.primary,
                        }}
                    >
                        {title}
                    </Typography>

                    {/* Quote icon */}
                    <FormatQuoteIcon
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: 28,
                        }}
                    />

                    {/* Testimonial text */}
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 1,
                            whiteSpace: "pre-line",
                            color: theme.palette.text.primary,
                            lineHeight: 1.6,
                            // push author to the bottom
                            flexGrow: 1,
                        }}
                    >
                        {text}
                    </Typography>

                    {/* Author */}
                    <Typography
                        variant="subtitle2"
                        sx={{
                            mt: 3,
                            fontStyle: "italic",
                            textAlign: "right",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        — {author}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default TestimonyCard;
