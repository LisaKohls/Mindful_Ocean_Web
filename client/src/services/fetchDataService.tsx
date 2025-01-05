import React, { useEffect, useState } from "react";
import { fetchContentBySection } from "../api/FetchLandingPageApi.tsx";

// Typ für die Rückgabedaten
type ContentData = { title: string; content: string } | null;

export function useFetchDataService(id: string): ContentData {
    const [data, setData] = useState<ContentData>(null);

    useEffect(() => {
        async function loadContent() {
            try {
                const fetchedData = await fetchContentBySection(id);
                setData(fetchedData);
            } catch (error) {
                console.error('error loading section:', error);
            }
        }
        loadContent();
    }, []);

    return data;
}
