const checkPointLabsTab = () => {

    const data = [{checkpoint: true, labName: 1}, {checkpoint: true, labName: 2}, {checkpoint: true, labName: 3}, {checkpoint: false, labName: 4}, {checkpoint: true, labName: 5}, {checkpoint: true, labName: 6}, {checkpoint: true, labName: 7}, {checkpoint: false, labName: 8}, {checkpoint: true, labName: 9},{checkpoint: true, labName: 10}]


    const processedData = () => {
        const tableRows = [];
        data.forEach(entry => {
            tableRows.push(
                <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </th>
                            <td class="px-6 py-4">
                                {entry.labName}
                            </td>
                        </tr>
                    </tbody>
            )
        })
        return tableRows;
    } 

    return (
        <>
            
            <h1 class="flex text-5xl justify-center font-extrabold dark:text-white">Checkpoint Lab Section</h1>


            
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Lab ID 
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Lab Name
                            </th>
                        </tr>
                    </thead>
                    {processedData()}
                </table>
            </div>

        </>
    )
}

export default checkPointLabsTab;