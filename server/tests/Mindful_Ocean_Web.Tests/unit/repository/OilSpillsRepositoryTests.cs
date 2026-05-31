using System.Net;
using Mindful_Ocean_Web.server.repository;
using Mindful_Ocean_Web.server.tests.unit.testData;
using Moq;
using Moq.Protected;
using Xunit;

public class OilSpillsRepositoryTests
{
    private readonly Mock<HttpMessageHandler> _handlerMock;
    private readonly OilSpillsRepository _repository;

    public OilSpillsRepositoryTests()
    {
        _handlerMock = new Mock<HttpMessageHandler>();

        var httpClient = new HttpClient(_handlerMock.Object);
        _repository = new OilSpillsRepository(httpClient);
    }

    [Fact]
    public async Task GetOilSpillsBySearchParam_WithValidParam_ReturnsJson()
    {
        var response = new HttpResponseMessage(HttpStatusCode.OK)
        {
            Content = new StringContent(MockData.MockDataBrisbane)
        };

        _handlerMock
            .Protected()
            .Setup<Task<HttpResponseMessage>>(
                "SendAsync",
                ItExpr.IsAny<HttpRequestMessage>(),
                ItExpr.IsAny<CancellationToken>()
            )
            .ReturnsAsync(response);

        var result = await _repository.GetOilSpillsBySearchParam("Brisbane");

        Assert.NotNull(result);
        Assert.Contains("Brisbane", result);
        Assert.Contains("records", result);
    }
}