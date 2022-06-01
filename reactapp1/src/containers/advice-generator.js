const AdviceGenerator = () => {
    return (
        <div>
            <button type = "submit"
            onClick={(event) => {
                event.preventDefault();
                window.open("http://google.com")
            }}
            >Advice Generator
            </button>

        </div>
    )
}

export default AdviceGenerator;