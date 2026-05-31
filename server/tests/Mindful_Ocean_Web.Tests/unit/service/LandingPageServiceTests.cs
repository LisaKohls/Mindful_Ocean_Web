using System.Collections.Generic;
using System.Threading.Tasks;
using Mindful_Ocean_Web.server.Interface;
using Mindful_Ocean_Web.server.model;
using Mindful_Ocean_Web.server.service;
using Moq;
using Xunit;

namespace Mindful_Ocean_Web.server.tests.unit.service;

public class LandingPageServiceTests
{
    private readonly Mock<ILandingPageRepository> _mockRepository;
    private readonly LandingPageService _service;

    public LandingPageServiceTests()
    {
        _mockRepository = new Mock<ILandingPageRepository>();
        _service = new LandingPageService(_mockRepository.Object);
    }

    [Fact]
    public async Task GetAllContents_ReturnsListOfContents_Successfully()
    {
        // Arrange
        var mockContents = new List<LandingPageContent>
        {
            new() { Content_id = 1, Title = "Welcome", Content = "Welcome to Mindful Ocean" },
            new() { Content_id = 2, Title = "About", Content = "Learn about ocean pollution" }
        };

        _mockRepository
            .Setup(repo => repo.GetAllContents())
            .ReturnsAsync(mockContents);

        // Act
        var result = await _service.GetAllContents();

        // Assert
        Assert.NotNull(result);
        Assert.Equal(2, result.Value.Count);
        _mockRepository.Verify(repo => repo.GetAllContents(), Times.Once);
    }

    [Fact]
    public async Task GetAllContents_WithEmptyList_ReturnsEmptyList()
    {
        // Arrange
        var mockContents = new List<LandingPageContent>();

        _mockRepository
            .Setup(repo => repo.GetAllContents())
            .ReturnsAsync(mockContents);

        // Act
        var result = await _service.GetAllContents();

        // Assert
        Assert.NotNull(result);
        Assert.Empty(result.Value);
        _mockRepository.Verify(repo => repo.GetAllContents(), Times.Once);
    }

    [Fact]
    public async Task GetContentById_WithValidId_ReturnsContent()
    {
        // Arrange
        var contentId = 1;
        var mockContent = new LandingPageContent
        {
            Content_id = contentId,
            Title = "Welcome",
            Content = "Welcome to Mindful Ocean"
        };

        _mockRepository
            .Setup(repo => repo.GetContentById(contentId))
            .ReturnsAsync(mockContent);

        // Act
        var result = await _service.GetContentById(contentId);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(contentId, result.Value.Content_id);
        Assert.Equal("Welcome", result.Value.Title);
        _mockRepository.Verify(repo => repo.GetContentById(contentId), Times.Once);
    }

    [Fact]
    public async Task GetContentById_WithInvalidId_ReturnsNull()
    {
        // Arrange
        var contentId = 999;
        LandingPageContent? mockContent = null;

        _mockRepository
            .Setup(repo => repo.GetContentById(contentId))
            .ReturnsAsync(mockContent);

        // Act
        var result = await _service.GetContentById(contentId);

        // Assert
        Assert.Null(result.Value);
        _mockRepository.Verify(repo => repo.GetContentById(contentId), Times.Once);
    }

    [Theory]
    [InlineData(1)]
    [InlineData(5)]
    [InlineData(10)]
    public async Task GetContentById_WithDifferentIds_VerifiesRepositoryCalls(int contentId)
    {
        // Arrange
        LandingPageContent? mockContent = null;

        _mockRepository
            .Setup(repo => repo.GetContentById(It.IsAny<int>()))
            .ReturnsAsync(mockContent);

        // Act
        await _service.GetContentById(contentId);

        // Assert
        _mockRepository.Verify(repo => repo.GetContentById(contentId), Times.Once);
    }
}
