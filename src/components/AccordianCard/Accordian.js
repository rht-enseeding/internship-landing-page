import { IconButton } from "@mui/material";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Accordian({ para, heading }) {
    const [accordian, setAccordian] = React.useState(false);
    return (
        <>
            <div className="accordian" onClick={() => setAccordian(!accordian)}>
                <div className="accordianheader">
                    <h5>{heading}</h5>
                    {!accordian && (
                        <IconButton id="faqarrow">
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    )}
                    {accordian && (
                        <IconButton id="faqarrow">
                            <KeyboardArrowUpIcon />
                        </IconButton>
                    )}
                </div>

                {accordian && (
                    <div className="accordiancontent">
                        <p>{para}</p>
                    </div>
                )}
            </div>
        </>
    );
}
