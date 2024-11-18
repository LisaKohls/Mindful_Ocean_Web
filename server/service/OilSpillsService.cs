using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.Interface;

namespace Mindful_Ocean_Web.server.service;

public class OilSpillsService
{
    private readonly IOilSpillsRepository _oilSpillsRepository;

    public OilSpillsService(IOilSpillsRepository oilSpillsRepository)
    {
        _oilSpillsRepository = oilSpillsRepository;
    }
    
    public async Task<ActionResult<JsonArray>> GetOilSpillsBySearchParam(string searchparam)
    {
        var result = await _oilSpillsRepository.GetOilSpillsBySearchParam(searchparam);

        JsonNode rootNode = JsonNode.Parse(result);
        JsonArray recordsArray = rootNode["result"]["records"].AsArray();

        foreach (JsonNode record in recordsArray)
        {
            record["Date"] = dateFormatter(record["Date"].ToString());
        }

        return recordsArray; 
    }
    
    private string dateFormatter(string date)
    {
        return date.Remove(date.Length -9);
    }
}