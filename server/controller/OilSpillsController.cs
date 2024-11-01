using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.Interface;

namespace Mindful_Ocean_Web.server.controller;


[ApiController]
[Route("api/oilspills/")]
public class OilSpillsController: ControllerBase
{
    private readonly IOilSpillsRepository _oilSpillsRepository;
    
    public OilSpillsController(IOilSpillsRepository oilSpillsRepository)
    {
        _oilSpillsRepository = oilSpillsRepository;
    }
    
    [HttpGet("{searchparam}")]
    public async Task<ActionResult<string>> GetOilSpillsBySearchParam(string searchparam)
    {
        var result = await _oilSpillsRepository.GetOilSpillsBySearchParam(searchparam);
        
        JsonNode rootNode = JsonNode.Parse(result);

        JsonNode resultNode = rootNode["result"];

        JsonArray recordsArray = resultNode["records"].AsArray();

        foreach (JsonNode record in recordsArray)
        {
            int id = record["_id"].GetValue<int>();
            string date = dateFormatter(record["Date"].ToString());
            record["Date"] = date;
            string region = record["Region"].ToString();
            string source = record["Source"].ToString();
            string shipType = record["Ship Type"].ToString();
            string area = record["Area"].ToString();
            string location = record["Location"].ToString();
            string pollutant = record["Pollutant"].ToString();
            string estimatedLitres = record["Estimated Litres"].ToString();

            Console.WriteLine($"ID: {id}, Date: {date}, Region: {region}, Pollutant: {pollutant}");
        }
        
        return Ok(recordsArray);
    }

    private string dateFormatter(string date)
    {
        return date.Remove(date.Length -9);
    }
    
}