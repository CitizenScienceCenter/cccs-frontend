# Cccs.SubmissionsApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSubmissionCreate**](SubmissionsApi.md#apiSubmissionCreate) | **POST** /submissions | Post a submission
[**apiSubmissionDelete**](SubmissionsApi.md#apiSubmissionDelete) | **DELETE** /submissions | Remove a submission
[**apiSubmissionGet**](SubmissionsApi.md#apiSubmissionGet) | **GET** /submissions | Get a single submission
[**apiSubmissionGetOne**](SubmissionsApi.md#apiSubmissionGetOne) | **GET** /submission/{id} | Get a single submission
[**apiSubmissionPut**](SubmissionsApi.md#apiSubmissionPut) | **PUT** /submissions | Modify/Create a submission


<a name="apiSubmissionCreate"></a>
# **apiSubmissionCreate**
> Submission apiSubmissionCreate(id, opts)

Post a submission

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.SubmissionsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)

var opts = { 
  'project': new Cccs.Submission() // Submission | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiSubmissionCreate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 
 **project** | [**Submission**](Submission.md)|  | [optional] 

### Return type

[**Submission**](Submission.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiSubmissionDelete"></a>
# **apiSubmissionDelete**
> apiSubmissionDelete(id)

Remove a submission

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.SubmissionsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubmissionDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiSubmissionGet"></a>
# **apiSubmissionGet**
> [Submission] apiSubmissionGet()

Get a single submission

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.SubmissionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiSubmissionGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Submission]**](Submission.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiSubmissionGetOne"></a>
# **apiSubmissionGetOne**
> Submission apiSubmissionGetOne(id)

Get a single submission

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.SubmissionsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiSubmissionGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 

### Return type

[**Submission**](Submission.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiSubmissionPut"></a>
# **apiSubmissionPut**
> apiSubmissionPut(id, opts)

Modify/Create a submission

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.SubmissionsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)

var opts = { 
  'project': new Cccs.Submission() // Submission | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubmissionPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 
 **project** | [**Submission**](Submission.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

