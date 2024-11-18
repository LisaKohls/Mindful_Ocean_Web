using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mindful_Ocean_Web.server.data;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.repository;

public class LandingPageRepository: ILandingPageRepository
{
    private ApplicationDbContext Context { get; set; }
    
    public LandingPageRepository(ApplicationDbContext context)
    {
        Context = context; 
    }
    
    public async Task<ActionResult<List<LandingPageContent>>> GetAllContents()
    {
        return await Context.LandingPageContents.ToListAsync();
    }
    
    public async Task<ActionResult<LandingPageContent>> GetContentById(int id)
    {
        var content = await Context.LandingPageContents.FindAsync(id);

        return content; 
    }
}