using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.Interface;

public interface ILandingPageRepository
{
    public Task<ActionResult<List<LandingPageContent>>> GetAllContents();
    public Task<ActionResult<LandingPageContent>> GetContentById(int id);

}