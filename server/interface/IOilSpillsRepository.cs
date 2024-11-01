namespace Mindful_Ocean_Web.server.Interface;

public interface IOilSpillsRepository
{
    public Task<string> GetOilSpillsBySearchParam(string searchparam);
}