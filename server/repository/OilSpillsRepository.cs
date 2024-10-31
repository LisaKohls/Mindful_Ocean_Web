using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.Interface;

namespace Mindful_Ocean_Web.server.repository;

public class OilSpillsRepository: IOilSpillsRepository
{
    private readonly HttpClient _httpClient;

    public OilSpillsRepository(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<string> GetOilSpillsByRegion(string region)
    {
        try {
            var requestUrl = "https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=6d5865f0-b7fc-4770-a303-a0b1f85f661f&q=" + region;

            HttpResponseMessage response = await _httpClient.GetAsync(requestUrl);
            
            response.EnsureSuccessStatusCode();

            return await response.Content.ReadAsStringAsync();
            
        } catch (HttpRequestException e) {
            Console.WriteLine($"Request error: {e.Message}");
            return null;
        }
    }
    
}