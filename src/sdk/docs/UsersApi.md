# Cccs.UsersApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOtokenGenerate**](UsersApi.md#apiOtokenGenerate) | **POST** /users/authorize | Post auth for token response
[**apiUserGet**](UsersApi.md#apiUserGet) | **GET** /users/{id} | Get all users (or those matching an ID)
[**apiUserGetUsers**](UsersApi.md#apiUserGetUsers) | **GET** /users | 
[**apiUserLogin**](UsersApi.md#apiUserLogin) | **POST** /users/login | Allow a user to login
[**apiUserRegister**](UsersApi.md#apiUserRegister) | **POST** /users/register | Registration end point for a user account
[**decoratorsAccessChecksEnsureKey**](UsersApi.md#decoratorsAccessChecksEnsureKey) | **GET** /users/validate | OAuth2 token info


<a name="apiOtokenGenerate"></a>
# **apiOtokenGenerate**
> apiOtokenGenerate(opts)

Post auth for token response

### Example
```javascript
var Cccs = require('cccs');

var apiInstance = new Cccs.UsersApi();

var opts = { 
  'token': new Cccs.Otoken() // Otoken | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOtokenGenerate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**Otoken**](Otoken.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiUserGet"></a>
# **apiUserGet**
> User apiUserGet(id)

Get all users (or those matching an ID)

### Example
```javascript
var Cccs = require('cccs');
var defaultClient = Cccs.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Cccs.UsersApi();

var id = "id_example"; // String | The unique identifer for an Object (i.e. User, Task, Project, Submission etc)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUserGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifer for an Object (i.e. User, Task, Project, Submission etc) | 

### Return type

[**User**](User.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiUserGetUsers"></a>
# **apiUserGetUsers**
> [User] apiUserGetUsers(opts)



### Example
```javascript
var Cccs = require('cccs');

var apiInstance = new Cccs.UsersApi();

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
apiInstance.apiUserGetUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiUserLogin"></a>
# **apiUserLogin**
> apiUserLogin(opts)

Allow a user to login

### Example
```javascript
var Cccs = require('cccs');

var apiInstance = new Cccs.UsersApi();

var opts = { 
  'user': new Cccs.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUserLogin(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiUserRegister"></a>
# **apiUserRegister**
> apiUserRegister(opts)

Registration end point for a user account

### Example
```javascript
var Cccs = require('cccs');

var apiInstance = new Cccs.UsersApi();

var opts = { 
  'user': new Cccs.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUserRegister(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decoratorsAccessChecksEnsureKey"></a>
# **decoratorsAccessChecksEnsureKey**
> User decoratorsAccessChecksEnsureKey()

OAuth2 token info

### Example
```javascript
var Cccs = require('cccs');

var apiInstance = new Cccs.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.decoratorsAccessChecksEnsureKey(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

