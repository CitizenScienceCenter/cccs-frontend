# Cccs.MediaApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMediaCreate**](MediaApi.md#apiMediaCreate) | **POST** /media | 


<a name="apiMediaCreate"></a>
# **apiMediaCreate**
> apiMediaCreate(attachment, opts)



Add a new media attachment

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.MediaApi();

var attachment = "/path/to/file.txt"; // File | The file to be uploaded

var opts = { 
  'media': new Cccs.Media() // Media | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiMediaCreate(attachment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachment** | **File**| The file to be uploaded | 
 **media** | [**Media**](Media.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

