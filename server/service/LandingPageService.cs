using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.service;

public class LandingPageService
{
    private readonly ILandingPageRepository _landingPageRepository;

    public LandingPageService(ILandingPageRepository landingPageRepository)
    {
        _landingPageRepository = landingPageRepository;
    }
    
    public async Task<ActionResult<List<LandingPageContent>>> GetAllContents()
    {
        var contentList = await _landingPageRepository.GetAllContents();

        return contentList;
    }
    
    public async Task<ActionResult<LandingPageContent>> GetContentById(int id)
    {
       var contentElement = await _landingPageRepository.GetContentById(id);
       
       return contentElement;
    }
}