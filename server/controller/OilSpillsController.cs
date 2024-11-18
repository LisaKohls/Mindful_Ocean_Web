using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.service;

namespace Mindful_Ocean_Web.server.controller;


[ApiController]
[Route("api/oilspills/")]
public class OilSpillsController: ControllerBase
{
    private readonly OilSpillsService _oilSpillsService;
    
    public OilSpillsController(OilSpillsService oilSpillsService)
    {
        _oilSpillsService = oilSpillsService;
    }
    
    [HttpGet("{searchparam}")]
    public async Task<ActionResult<string>> GetOilSpillsBySearchParam(string searchparam)
    {
        var result = await _oilSpillsService.GetOilSpillsBySearchParam(searchparam);

        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }

   
    
}