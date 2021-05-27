/**
 * Author: Lakshman Veti
 * Type: Configuration
 * Objective: To access global variables accross application
 * Usage: Accross application
*/

var configuration = {
    "appName": "GPO-Health-ReactUI",
    "apiUrl": {
        node: '/api/v1', 
        //node: 'http://18.207.124.230:3000/api/v1',
    },
    "filesAutoRefresh": 5000, //ms
    "authType": "ads", //rest
    "snapshot": {
    },
    "appSetting": {
        "headingDateFormat": "DD-MMM-YYYY",
        "globelDateFormat": "DD/MM/YYYY",
        "dashboardDefaultRange": "Year"
    },
    "powerBIReport": {
        scopes: ["https://analysis.windows.net/powerbi/api/Report.Read.All"],
        clientId: "6854b857-3971-46a1-a507-683701540b48",
        workspaceId: "3cdf5902-95cc-4dc9-9ad4-6f8671a701de",
        reportId: "b3ba3432-e03f-4dd6-a54b-5734b26abe88",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=b3ba3432-e03f-4dd6-a54b-5734b26abe88&groupId=3cdf5902-95cc-4dc9-9ad4-6f8671a701de&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtQy1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWV9fQ%3d%3d"
    }
}

module.exports = configuration;
