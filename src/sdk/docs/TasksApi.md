# Cccs.TasksApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTaskCreate**](TasksApi.md#apiTaskCreate) | **POST** /tasks | Post a task
[**apiTaskDelete**](TasksApi.md#apiTaskDelete) | **DELETE** /tasks | Remove a task
[**apiTaskGet**](TasksApi.md#apiTaskGet) | **GET** /tasks | Get a single task
[**apiTaskGetOne**](TasksApi.md#apiTaskGetOne) | **GET** /tasks/{id} | Get a single task
[**apiTaskPut**](TasksApi.md#apiTaskPut) | **PUT** /tasks | Modify/Create a task


<a name="apiTaskCreate"></a>
# **apiTaskCreate**
> Task apiTaskCreate(id, opts)

Post a task

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.TasksApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)

var opts = { 
  'project': new Cccs.Task() // Task | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiTaskCreate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 
 **project** | [**Task**](Task.md)|  | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiTaskDelete"></a>
# **apiTaskDelete**
> apiTaskDelete(id)

Remove a task

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.TasksApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiTaskDelete(id, callback);
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

<a name="apiTaskGet"></a>
# **apiTaskGet**
> [Task] apiTaskGet()

Get a single task

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.TasksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiTaskGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Task]**](Task.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiTaskGetOne"></a>
# **apiTaskGetOne**
> Task apiTaskGetOne(id)

Get a single task

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.TasksApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiTaskGetOne(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 

### Return type

[**Task**](Task.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiTaskPut"></a>
# **apiTaskPut**
> apiTaskPut(id, opts)

Modify/Create a task

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.TasksApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)

var opts = { 
  'project': new Cccs.Task() // Task | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiTaskPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 
 **project** | [**Task**](Task.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

