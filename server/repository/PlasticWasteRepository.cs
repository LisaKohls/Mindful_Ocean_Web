using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mindful_Ocean_Web.server.data;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.repository;

public class PlasticWasteRepository: IPlasticWasteRepository
{
    private ApplicationDbContext Context { get; set; }
    
    public PlasticWasteRepository(ApplicationDbContext context)
    {
        Context = context; 
    }

    public async Task<ActionResult<List<PlasticWaste>>> GetPlasticWaste()
    {
        return await Context.PlasticWaste.ToListAsync();
    }
    
    public async Task<ActionResult<PlasticWaste>> GetPlasticWasteByCountry(string country)
    {
        return await Context.PlasticWaste.FirstOrDefaultAsync(p => p.Entity == country);
    }
}