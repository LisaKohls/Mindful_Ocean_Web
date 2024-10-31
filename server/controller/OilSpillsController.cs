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
    
    [HttpGet("region/{region}")]
    public async Task<ActionResult<string>> GetOilSpillsByRegion(string region)
    {
        var result = await _oilSpillsRepository.GetOilSpillsByRegion(region);
        
        return Ok(result);
    }
    
}