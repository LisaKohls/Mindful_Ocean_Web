using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.Interface;

public interface IPlasticWasteRepository
{
    Task<ActionResult<List<PlasticWaste>>> GetPlasticWaste();
    public Task<ActionResult<PlasticWaste>> GetPlasticWasteByCountry(string country);
}