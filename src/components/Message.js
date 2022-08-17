import React from "react";

const Message = ({msg, bgColor}) => {
    let styles = {
        padding: "rem",
        marginBottom: "1rem",
        textAlign: "center",
        backgroundColor: bgColor,
        color: "#fff",
        fontWeight: "bold",
    };
    return (
        <div style={styles}>
            <p>{msg}</p>
        </div>
    );
};

export default Message;