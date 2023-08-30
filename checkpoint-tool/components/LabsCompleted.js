import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSquareCheck, faLock, faChartSimple, faDatabase, faTable, faBars, faTriangleExclamation, faHouse, faCheck, faX } from '@fortawesome/free-solid-svg-icons'


const LabsCompleted = () => {
    const labNumber = 25;
    const users = 
    [
        {name: "Caleb Stevens", labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true"},
        {name: "Grayson Orr", labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true"},
        {name: "Marco Koen", labs: "true, true, true, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, true, true, true"}
    ];

    const renderLabNumbers = () => {
    const labHeaders = [];

    for(let i = 0; i <= labNumber; i++) {
        labHeaders.push(<th scope="col" class="px-4 py-2">Lab {i}</th>);
    }
    return labHeaders;
    }

    const renderUsers = () => {
        const userRows = [];
        users.forEach(user => {
            userRows.push(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-2 py-2">{user.name}</td>
                    {user.labs.split(', ').map((lab, index) => {
                        return <td class="px-2 py-2" key={index}>{(lab == 'true' ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faX}/>)}</td>
                    })}
                </tr>
            )
        })
        return userRows;
    }





    return(
    <>
    <h1 class="text-2xl font-bold mb-4 text-white">Labs Completed By Students</h1>
    <table class="text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="px-6 py-3">
                    Student's Name
                </th>
                {renderLabNumbers()}
            </tr>
        </thead>
        <tbody>
        {renderUsers()}
        </tbody>
    </table>
    </>
)};

export default LabsCompleted;
