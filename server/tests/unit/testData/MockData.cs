namespace Mindful_Ocean_Web.server.tests.unit.testData;

public class MockData
{
    public static readonly String MockDataBrisbane = """
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
    
    public static readonly String InvalidLocation = """
                                                    {
                                                      "result": {
                                                        "records": []
                                                      }
                                                    }
                                                    """;
}