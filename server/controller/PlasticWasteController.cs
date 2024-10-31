using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mindful_Ocean_Web.server.data;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.controller;

[ApiController]
[Route("api/plasticwaste")]
public class PlasticWasteController: ControllerBase
{
    private readonly IPlasticWasteRepository _plasticWasteRepository;
    
    public PlasticWasteController(IPlasticWasteRepository plasticWasteRepository)
    {
        _plasticWasteRepository = plasticWasteRepository;
    }
    
    // GET: api/plasticwaste
    [HttpGet]
    public async Task<ActionResult<List<PlasticWaste>>> GetPlasticWaste()
    {
        var plasticWasteList = await _plasticWasteRepository.GetPlasticWaste();
        
        if (plasticWasteList == null)
        {
            return NotFound(); 
        }

        return Ok(plasticWasteList);
    }

    // GET: api/plasticwaste/country/{country}
    [HttpGet("country/{country}")]
    public async Task<ActionResult<PlasticWaste>> GetPlasticWasteByCountry(string country)
    {
        var plasticWaste = await _plasticWasteRepository.GetPlasticWasteByCountry(country);

        if (plasticWaste == null)
        {
            return NotFound(); 
        }

        return Ok(plasticWaste);
    }
    
    
  
    
}