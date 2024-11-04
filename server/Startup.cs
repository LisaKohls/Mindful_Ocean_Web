using Microsoft.EntityFrameworkCore;
using Mindful_Ocean_Web.server.data;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.repository;

namespace Mindful_Ocean_Web.server;

public class Startup
{
    private IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddHttpClient();
        services.AddScoped<IOilSpillsRepository, OilSpillsRepository>();
        services.AddScoped<IPlasticWasteRepository, PlasticWasteRepository>();
    
        services.AddDbContext<ApplicationDbContext>(
            context => context.UseMySql(Configuration.GetConnectionString("defaultConnection:ConnectionString"), ServerVersion.Parse("5.7.24-mysql"))
            );
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        
        app.UseHttpsRedirection();
        app.UseRouting();
        app.UseAuthorization();
        
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
    
}