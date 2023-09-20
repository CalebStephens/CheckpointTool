

const deleteLab = () => {

    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,"Caleb", "One"]

    const processedData = () => {
        const tableRows = [];
        data.forEach(entry => {
            tableRows.push(
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </th>
                            <td class="px-6 py-4">
                                Lab {entry}
                            </td>
                        </tr>
                </tbody>
            )
        })
        return tableRows;
    } 

    return (
        <>
        <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Delete Labs</h1>
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

            <button type="button" class="flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
        </>
    )
}

export default deleteLab;