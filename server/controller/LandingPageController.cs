using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.model;
using Mindful_Ocean_Web.server.service;

namespace Mindful_Ocean_Web.server.controller;

[ApiController]
[Route("api/landingpage/")]
public class LandingPageController: ControllerBase
{
    private readonly LandingPageService _landingPageService;
    
    public LandingPageController(LandingPageService landingPageService)
    {
        _landingPageService = landingPageService;
    }
    
    [HttpGet]
    public async Task<ActionResult<List<LandingPageContent>>> GetLandingPageContents()
    {
        var contentList = await _landingPageService.GetAllContents();
        
        if (contentList == null)
        {
            return NotFound(); 
        }
        return Ok(contentList);
    }
    
    [HttpGet("contentId/{contentId}")]
    public async Task<ActionResult<LandingPageContent>> GetLandingPageContentById(int contentId)
    {
        var contentElement = await _landingPageService.GetContentById(contentId);
        if (contentElement == null)
        {
            return NotFound(); 
        }

        return Ok(contentElement); 
    }
    
}