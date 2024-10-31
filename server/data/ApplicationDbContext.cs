using Microsoft.EntityFrameworkCore;
using Mindful_Ocean_Web.server.model;

namespace Mindful_Ocean_Web.server.data;

public class ApplicationDbContext: DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
    public DbSet<PlasticWaste>PlasticWaste { get; set; }
    public DbSet<OceanDepth>OceanDepths { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PlasticWaste>()
            .HasKey(p => p.Entity); 
        
        modelBuilder.Entity<OceanDepth>()
            .HasKey(p => new { p.Longitude, p.Latitude });
    }
    
}