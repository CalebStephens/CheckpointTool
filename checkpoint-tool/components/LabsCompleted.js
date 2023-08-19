const LabsCompleted = () => {
    const labNumber = 25;
    const users = 
    [
        {name: "Caleb Stevens", labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true"},
        {name: "Grayson Orr", labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true"},
        {name: "Marco Koen", labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, true, true"}
    ];

    const renderLabNumbers = () => {
    const labHeaders = [];

    for(let i = 0; i < labNumber; i++) {
        labHeaders.push(<th class="py-3 border-cyan-800 p-2">Lab {i}</th>);
    }
    return labHeaders;
    }

    const renderUsers = () => {
        const userRows = [];
        users.forEach(user => {
            userRows.push(
                <tr>
                    <td class="py-3 border-cyan-800 p-2">{user.name}</td>
                    {user.labs.split(', ').map(lab => {
                        return <td class="py-3 border-cyan-800 p-2">{lab}</td>
                    })}
                </tr>
            )
        })
        return userRows;
    }





    return(
    <>
    <h1 class="text-2xl font-bold mb-4 text-white">Labs Completed By Students</h1>
    <table class="shadow-2xl font-[Poppings] border-2 border-cyan-200 w-6/12">
        <thread class="text-white">
            <tr>
                <th class="py-3 border-cyan-800 p-2">Student Name</th>
                {renderLabNumbers()}
            </tr>
            <tbody>
            {renderUsers()}
            </tbody>
        </thread>
    </table>
    </>
)};

export default LabsCompleted;
