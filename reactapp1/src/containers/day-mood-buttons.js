const onClickValue = (event) => {
    event.preventDefault();
    console.log(event.target.value);
}  


const Moodbuttons = () => {
    return (
        <div onClick={ onClickValue }>
            <input type="radio" value="Good" name="mood" /> Good
            <input type="radio" value="Bad" name ="mood" /> Bad
        </div>
    )
}


export default Moodbuttons;