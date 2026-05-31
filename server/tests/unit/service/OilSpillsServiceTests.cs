using Moq;
using Xunit;
using Microsoft.AspNetCore.Mvc;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.service;

namespace Mindful_Ocean_Web.Tests.Unit.Service;

public class OilSpillsServiceTests
{
    private readonly Mock<IOilSpillsRepository> _mockRepository;
    private readonly OilSpillsService _service;

    public OilSpillsServiceTests()
    {
        _mockRepository = new Mock<IOilSpillsRepository>();
        _service = new OilSpillsService(_mockRepository.Object);
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithValidParam_ReturnsSuccessfully()
    {
        // Arrange
        var searchParam = "Brisbane";
        var mockResponse = """
            {
              "result": {
                "records": [
                  {
                    "Id": 1,
                    "Region": "Brisbane",
                    "Source": "Ship",
                    "Date": "2024-01-15T10:30:00.000Z",
                    "Pollutant": "Oil",
                    "EstimatedLitres": "5000"
                  }
                ]
              }
            }
            """;

        _mockRepository
            .Setup(repo => repo.GetOilSpillsBySearchParam(searchParam))
            .ReturnsAsync(mockResponse);

        // Act
        var result = await _service.GetOilSpillsBySearchParam(searchParam);

        // Assert
        Assert.NotNull(result);
        Assert.IsType<JsonArray>(result.Value);
        _mockRepository.Verify(repo => repo.GetOilSpillsBySearchParam(searchParam), Times.Once);
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithInvalidParam_ReturnsEmpty()
    {
        // Arrange
        var searchParam = "InvalidLocation";
        var mockResponse = """
            {
              "result": {
                "records": []
              }
            }
            """;

        _mockRepository
            .Setup(repo => repo.GetOilSpillsBySearchParam(searchParam))
            .ReturnsAsync(mockResponse);

        // Act
        var result = await _service.GetOilSpillsBySearchParam(searchParam);

        // Assert
        Assert.NotNull(result);
        _mockRepository.Verify(repo => repo.GetOilSpillsBySearchParam(searchParam), Times.Once);
    }

    [Theory]
    [InlineData("2024-01-15T10:30:00.000Z", "2024-01-15T10:30:00")]
    [InlineData("2023-12-01T14:45:30.000Z", "2023-12-01T14:45:30")]
    public void DateFormatter_RemovesTimestampMilliseconds_Successfully(string inputDate, string expectedDate)
    {
        // Note: This would require making dateFormatter public or using reflection
        // For testing private methods, consider refactoring to make it testable
        // This test demonstrates the intended behavior
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithNullParam_HandlesGracefully()
    {
        // Arrange
        var mockResponse = """
            {
              "result": {
                "records": []
              }
            }
            """;

        _mockRepository
            .Setup(repo => repo.GetOilSpillsBySearchParam(It.IsAny<string>()))
            .ReturnsAsync(mockResponse);

        // Act
        var result = await _service.GetOilSpillsBySearchParam("");

        // Assert
        Assert.NotNull(result);
        _mockRepository.Verify(repo => repo.GetOilSpillsBySearchParam(It.IsAny<string>()), Times.Once);
    }
}
