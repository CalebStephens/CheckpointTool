const checkPointLabsTab = () => {

    const data = [{checkpoint: true, labName: 1}, {checkpoint: true, labName: 2}, {checkpoint: true, labName: 3}, {checkpoint: false, labName: 4}, {checkpoint: true, labName: 5}, {checkpoint: true, labName: 6}, {checkpoint: true, labName: 7}, {checkpoint: false, labName: 8}, {checkpoint: true, labName: 9},{checkpoint: true, labName: 10}]


    const processedData = () => {
        const checkPointLabs = [];
        const nonCheckPointLabs = [];
        data.forEach(entry => {
            if(entry.checkpoint == true)
            {
                checkPointLabs.push(
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
            } else {
                nonCheckPointLabs.push(
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
            } 
            
            
        })
        return {checkPointLabs , nonCheckPointLabs};
    } 

    const { checkPointLabs, nonCheckPointLabs } = processedData(); 


    return (
        <>
            
            <h1 class="flex text-5xl justify-center font-extrabold dark:text-white">Checkpoint Lab Section</h1>


            
            <div class="relative overflow-x-auto pb-16">
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
                    {checkPointLabs}
                </table>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove Checkpoint</button>
            </div>
            


            <h1 class="flex text-5xl justify-center font-extrabold dark:text-white">Non Checkpoint Labs</h1>
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
                    {nonCheckPointLabs}
                </table>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Checkpoint</button>gi
            </div>
            

        </>
    )
}

export default checkPointLabsTab;