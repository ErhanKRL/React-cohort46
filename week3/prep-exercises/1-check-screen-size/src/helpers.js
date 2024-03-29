

const DisplaySize = ({ height, width }) => (
    <header style={{ fontSize: "30px", padding: "10px" }}>
        {width}px / {height}px
    </header>
)

const BigHeadMessage = ({ state }) => {
    if (!state) {
        return null
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "10px",
                lineHeight: "1",
                flexWrap: "wrap",
            }}
        >
            <div style={{ maxWidth: "250px" }}>
                {"You are seeing "}
                <header Component="span" style={{ fontSize: "20px" }}>
                    {state.name}
                </header>
                {" because your screen size is "}
                <header Component="span" style={{ fontSize: "20px" }}>
                    {state.size}!
                </header>
                <br />
                <div style={{ paddingTop: "10px", fontSize: "50px" }}>{state.icon}</div>
            </div>
        </div>
    )
}

export { DisplaySize, BigHeadMessage }