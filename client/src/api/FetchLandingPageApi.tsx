﻿


const url = 'https://localhost:7026/api/landingpage/contentId/';
export async function fetchContentBySection(sectionName: string): Promise<any>{
    let contentId = specificContent(sectionName);

    try {
        const response = await fetch(url + contentId);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.value.title); 
        return {
            title: json.value.title,
            content: json.value.content,
        };
    } catch (error) {
        console.log('error fetching data')
    }
    
}



function specificContent(sectionName: string): number {
    
    switch (sectionName) {
        case 'informationSection':
            return 6;
        case 'introduction':
            return 7;
        case 'quote':
            return 2;
        case 'quoteDetail1':
            return 3;
        case 'quoteDetail2':
            return 4;
        case 'quoteDetail3':
            return 5;
        default: 
            return 0;
    }
}
