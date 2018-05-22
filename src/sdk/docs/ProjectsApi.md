# Cccs.ProjectsApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProjectCreate**](ProjectsApi.md#apiProjectCreate) | **POST** /projects | Post a project
[**apiProjectDelete**](ProjectsApi.md#apiProjectDelete) | **DELETE** /projects/{id} | Remove a project
[**apiProjectGet**](ProjectsApi.md#apiProjectGet) | **GET** /projects | Get all projects
[**apiProjectGetOne**](ProjectsApi.md#apiProjectGetOne) | **GET** /projects/{id} | Get a single project
[**apiProjectPut**](ProjectsApi.md#apiProjectPut) | **PUT** /projects/{id} | Modify/Create a project


<a name="apiProjectCreate"></a>
# **apiProjectCreate**
> apiProjectCreate(opts)

Post a project

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.ProjectsApi();

var opts = { 
  'project': new Cccs.Project() // Project | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiProjectCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**Project**](Project.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProjectDelete"></a>
# **apiProjectDelete**
> apiProjectDelete(id)

Remove a project

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.ProjectsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiProjectDelete(id, callback);
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

<a name="apiProjectGet"></a>
# **apiProjectGet**
> [Project] apiProjectGet(opts)

Get all projects

### Example
```javascript
var Cccs = require('cccs');

var apiInstance = new Cccs.ProjectsApi();

var opts = { 
  'searchTerm': "searchTerm_example", // String | 
  'limit': 100 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiProjectGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProjectGetOne"></a>
# **apiProjectGetOne**
> apiProjectGetOne(id)

Get a single project

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.ProjectsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiProjectGetOne(id, callback);
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

<a name="apiProjectPut"></a>
# **apiProjectPut**
> apiProjectPut(id, opts)

Modify/Create a project

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.ProjectsApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)

var opts = { 
  'project': new Cccs.Project() // Project | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiProjectPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 
 **project** | [**Project**](Project.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

