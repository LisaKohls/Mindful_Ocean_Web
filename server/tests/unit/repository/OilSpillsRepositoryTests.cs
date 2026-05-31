using Mindful_Ocean_Web.server.repository;
using Mindful_Ocean_Web.server.tests.unit.testData;
using Moq;
using Xunit;

namespace Mindful_Ocean_Web.server.tests.unit.repository;

public class OilSpillsRepositoryTests
{
    private readonly Mock<HttpClient> _mockHttpClient;
    private readonly OilSpillsRepository _repository;

    public OilSpillsRepositoryTests()
    {
        _mockHttpClient = new Mock<HttpClient>();
        _repository = new OilSpillsRepository(_mockHttpClient.Object);
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithValidParam_ReturnsJson()
    {
        // Arrange
        var searchParam = "Brisbane";

        var httpResponseMessage = new HttpResponseMessage(System.Net.HttpStatusCode.OK)
        {
            Content = new StringContent(MockData.MockDataBrisbane)
        };

        _mockHttpClient
            .Setup(client => client.GetAsync(It.IsAny<string>()))
            .ReturnsAsync(httpResponseMessage);

        // Act
        var result = await _repository.GetOilSpillsBySearchParam(searchParam);

        // Assert
        Assert.NotNull(result);
        Assert.Contains("Brisbane", result);
        Assert.Contains("records", result);
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithEmptyResult_ReturnsEmptyRecords()
    {
        // Arrange
        var searchParam = "NonexistentLocation";

        var httpResponseMessage = new HttpResponseMessage(System.Net.HttpStatusCode.OK)
        {
            Content = new StringContent(MockData.InvalidLocation)
        };

        _mockHttpClient
            .Setup(client => client.GetAsync(It.IsAny<string>()))
            .ReturnsAsync(httpResponseMessage);

        // Act
        var result = await _repository.GetOilSpillsBySearchParam(searchParam);

        // Assert
        Assert.NotNull(result);
        Assert.Contains("records", result);
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithHttpException_ReturnsNull()
    {
        // Arrange
        var searchParam = "Brisbane";

        _mockHttpClient
            .Setup(client => client.GetAsync(It.IsAny<string>()))
            .ThrowsAsync(new HttpRequestException("Connection failed"));

        // Act
        var result = await _repository.GetOilSpillsBySearchParam(searchParam);

        // Assert
        Assert.Null(result);
    }

    [Theory]
    [InlineData("Brisbane")]
    [InlineData("Sydney")]
    [InlineData("Melbourne")]
    public async Task GetOilSpillsBySearchParam_BuildsCorrectUrl_WithDifferentParams(string searchParam)
    {
        // Arrange
        var httpResponseMessage = new HttpResponseMessage(System.Net.HttpStatusCode.OK)
        {
            Content = new StringContent("""{"result":{"records":[]}}""")
        };

        _mockHttpClient
            .Setup(client => client.GetAsync(It.IsAny<string>()))
            .ReturnsAsync(httpResponseMessage);

        // Act
        await _repository.GetOilSpillsBySearchParam(searchParam);

        // Assert
        _mockHttpClient.Verify(
            client => client.GetAsync(It.Is<string>(url => url.Contains(searchParam))),
            Times.Once);
    }
}
