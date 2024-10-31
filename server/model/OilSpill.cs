namespace Mindful_Ocean_Web.server.model;

public class OilSpill
{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public string Region { get; set; }
    public string Source { get; set; }
    public string ShipType { get; set; }
    public string Area { get; set; }
    public string Location { get; set; }
    public string Pollutant { get; set; }
    public string EstimatedLitres { get; set; }
}