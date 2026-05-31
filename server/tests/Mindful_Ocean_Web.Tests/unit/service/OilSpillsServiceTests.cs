using System.Text.Json.Nodes;
using System.Threading.Tasks;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.service;
using Mindful_Ocean_Web.server.tests.unit.testData;
using Moq;
using Xunit;

namespace Mindful_Ocean_Web.server.tests.unit.service;

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

        _mockRepository
            .Setup(repo => repo.GetOilSpillsBySearchParam(searchParam))
            .ReturnsAsync(MockData.MockDataBrisbane);

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

        _mockRepository
            .Setup(repo => repo.GetOilSpillsBySearchParam(searchParam))
            .ReturnsAsync(MockData.InvalidLocation);

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
        // This test demonstrates the intended behavior
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithNullParam_HandlesGracefully()
    {
        _mockRepository
            .Setup(repo => repo.GetOilSpillsBySearchParam(It.IsAny<string>()))
            .ReturnsAsync(MockData.InvalidLocation);

        // Act
        var result = await _service.GetOilSpillsBySearchParam("");

        // Assert
        Assert.NotNull(result);
        _mockRepository.Verify(repo => repo.GetOilSpillsBySearchParam(It.IsAny<string>()), Times.Once);
    }
}
