
const addLabs = () => {


    return(
        <>
        <h1>Add Semester Labs</h1>
        <h4>Tip: You can manually enter the lab in the "Extra Lab" field or add additional lab through out the semester</h4>
        <form action="">
        <label htmlFor="amountOfLabs">Amount of Labs:</label>
        <input type="int" id="amountOfLabs" name="amountOflabs" value="Enter Number Of Labs"></input>
        <input type="submit" value="Submit"></input>
        </form>

        <form action="">
        <label htmlFor="extraLabs">Extra Labs:</label>
        <input type="text" id="extraLabs" name="extraLabs" value="Enter Extra Lab Name or Number"></input>
        <input type="add" value="Add"></input>
        </form>
        </>
    )
};

export default addLabs;
