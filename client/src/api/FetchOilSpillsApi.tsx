import OilSpillSetting from "../interfaces/OilSpillSetting.tsx";
import $ from 'jquery';


const YEAR_2018 = '2ce3cf0b-6246-4512-b064-addfc7d00bb8';
const YEAR_2019 = '6d5865f0-b7fc-4770-a303-a0b1f85f661f';
const YEAR_2017 = '59fbf1dd-b18c-4a43-8348-f02b6aec5608';

export async function fetchOilSpillsApi(oilSpillSetting: OilSpillSetting): Promise<any> {
    const { year, limit, searchParam } = oilSpillSetting;
    let resource_id;
    
    switch (year) {
        case 2019:
            resource_id = YEAR_2019;
            break;
        case 2018:
            resource_id = YEAR_2018;
            break;
        case 2017:
            resource_id = YEAR_2017;
            break;
        default:
            return 'Wrong year';
    }

    const queryParams = new URLSearchParams({
        resource_id: resource_id,
        limit: limit.toString(),
        q: searchParam
    });

    const url = `https://www.data.qld.gov.au/api/3/action/datastore_search?${queryParams.toString()}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        alert('Total results found: ' + data.result.total);
        console.log(data.result);
        return data.result.total; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

