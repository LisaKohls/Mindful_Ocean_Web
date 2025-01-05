using Microsoft.EntityFrameworkCore;
using Mindful_Ocean_Web.server.data;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.repository;
using Mindful_Ocean_Web.server.service;

var builder = WebApplication.CreateBuilder(args);

// Add in memory database
builder.Services.AddScoped<IOilSpillsRepository, OilSpillsRepository>();
builder.Services.AddHttpClient<IOilSpillsRepository, OilSpillsRepository>();
builder.Services.AddScoped<IPlasticWasteRepository, PlasticWasteRepository>();
builder.Services.AddScoped<ILandingPageRepository, LandingPageRepository>();
builder.Services.AddScoped<OilSpillsService>();
builder.Services.AddScoped<LandingPageService>();
builder.Services.AddScoped<PlasticWasteService>();
builder.Configuration.AddJsonFile("./server/appsettings.Development.json", optional: false, reloadOnChange: true);
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseMySQL(builder.Configuration["dbContextSettings:ConnectionString"]));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("*")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
    
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // React-URL
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");
app.UseCors("AllowReactApp");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();